import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy,
  QueryList,
  ViewChildren
} from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Response, TIERS, Tier } from "../../../../config/config";
import { BehaviorSubject, Observable, Subject, combineLatest, of } from "rxjs";
import {
  takeUntil,
  distinctUntilChanged,
  map,
  switchMap,
  withLatestFrom,
  take
} from "rxjs/operators";
import { SettingsState, State } from "../../../core/settings/settings.model";
import { Store, select } from "@ngrx/store";
import {
  selectSettings,
  selectSettingsLanguage
} from "../../../core/settings/settings.selectors";
import { selectTableviewerGridSlice } from "../../../core/tableviewer-selection/tableviewer-selection.selectors";
import { TranslateService } from "@ngx-translate/core";
import {
  PronounService,
  VerbService,
  OptionService
} from "../../../core/core.module";

export type GridOrderOptions = "root" | "pn" | "option";
export interface GridOrder {
  main: GridOrderOptions;
  row: GridOrderOptions;
  col: GridOrderOptions;
}

@Component({
  selector: "ww-conjugation-grid",
  templateUrl: "./conjugation-grid.component.html",
  styleUrls: ["./conjugation-grid.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConjugationGridComponent
  implements AfterViewInit, OnDestroy, OnInit {
  keys = Object.keys;
  displayTier = TIERS[0];
  tiers$: Observable<Tier[]>;
  settings$: Observable<SettingsState>;
  dataSources: MatTableDataSource<Response>[];
  uniqueCol: string[];
  uniqueMain: string[];
  displayedColumns: string[];
  unsubscribe$ = new Subject<void>();
  currentTab = 0;
  @Input() data$;
  @ViewChildren(MatPaginator) paginators: QueryList<MatPaginator>;
  constructor(
    private store: Store<State>,
    private cdr: ChangeDetectorRef,
    private translate: TranslateService,
    private optionService: OptionService,
    private pronounService: PronounService,
    private verbService: VerbService
  ) {}

  ngOnInit(): void {
    this.settings$ = this.store.pipe(
      takeUntil(this.unsubscribe$),
      select(selectSettings)
    );
    this.tiers$ = this.settings$.pipe(
      takeUntil(this.unsubscribe$),
      map(settings => TIERS.filter(tier => settings.level[tier.name]))
    );
    this.data$
      .pipe(takeUntil(this.unsubscribe$), distinctUntilChanged())
      .subscribe(data => {
        if (data) {
          this.uniqueCol = data.uniqueCol;
          this.uniqueMain = data.uniqueMain;
          this.dataSources = data.structuredData.map(() => {
            const dataSource = new MatTableDataSource<Response>();
            return dataSource;
          });
          this.displayedColumns = ["placeholder", ...this.uniqueCol];
          this.cdr.detectChanges();
        }
      });
  }

  ngAfterViewInit(): void {
    this.data$
      .pipe(takeUntil(this.unsubscribe$), distinctUntilChanged())
      .subscribe(data => {
        console.log(data);
        if (data) {
          data.structuredData.forEach((x, i) => {
            this.dataSources[i].paginator = this.paginators.toArray()[i]; // Currently not working for n>1
            this.dataSources[i].data = x;
          });
          this.currentTab = 0;
        }
      });
  }

  getTranslation$(term, type) {
    return this.store.pipe(
      select(selectTableviewerGridSlice),
      takeUntil(this.unsubscribe$),
      switchMap(gridState =>
        combineLatest([
          of(gridState),
          this.store.pipe(
            takeUntil(this.unsubscribe$),
            select(selectSettingsLanguage)
          )
        ])
      ),
      map(([gridState, lang]) => {
        if (gridState.gridOrder[type] === "root") {
          return this.verbService.getVerb(term)[lang];
        } else if (gridState.gridOrder[type] === "pn") {
          const pnSplit = term.split("→");
          if (pnSplit.length === 2) {
            return (
              this.pronounService.getPronoun(pnSplit[0].trim())[lang]["agent"] +
              " → " +
              this.pronounService.getPronoun(pnSplit[1].trim())[lang]["patient"]
            );
          } else {
            return this.pronounService.getPronoun(term)[lang]["agent"];
          }
        } else if (gridState.gridOrder[type] === "option") {
          return this.optionService.getOption(term)[lang]["tag"];
        }
      })
    );
  }

  createTranslationKey$(term, type) {
    return this.store.pipe(
      select(selectTableviewerGridSlice),
      take(1),
      switchMap(gridState => {
        let prefix = "ww-data.";
        if (gridState.gridOrder[type] === "root") {
          prefix = prefix + "verbs.";
        } else if (gridState.gridOrder[type] === "pn") {
          const pnSplit = term.split("→");
          if (pnSplit.length === 2) {
          } else {
            prefix = prefix + "pronouns.agents.";
          }
        } else if (gridState.gridOrder[type] === "option") {
          prefix = prefix + "options.items.";
        }
        return this.translate.get(prefix + term);
      })
    );
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onTabChange(event) {
    this.currentTab = event.index;
  }
}
