import { MatPaginatorIntl } from "@angular/material/paginator";
import { marker as _ } from "@colsen1991/ngx-translate-extract-marker";
import { TranslateParser, TranslateService } from "@ngx-translate/core";

export class WWPaginatorIntl extends MatPaginatorIntl {
  private rangeLabelIntl: string;

  constructor(
    private translateService: TranslateService,
    private translateParser: TranslateParser
  ) {
    super();
    this.getTranslations();
    this.translateService.onLangChange.subscribe(() => this.getTranslations());
  }

  getTranslations() {
    this.translateService
      .get([
        _("ww.paginator.items_per_page"),
        _("ww.paginator.next_page"),
        _("ww.paginator.previous_page"),
        _("ww.paginator.first_page"),
        _("ww.paginator.last_page"),
        _("ww.paginator.range"),
      ])
      .subscribe((translation) => {
        this.itemsPerPageLabel = translation["ww.paginator.items_per_page"];
        this.nextPageLabel = translation["ww.paginator.next_page"];
        this.firstPageLabel = translation["ww.paginator.first_page"];
        this.lastPageLabel = translation["ww.paginator.last_page"];
        this.previousPageLabel = translation["ww.paginator.previous_page"];
        this.rangeLabelIntl = translation["ww.paginator.range"];
        this.changes.next();
      });
  }

  getRangeLabel = (page, pageSize, length) => {
    length = Math.max(length, 0);
    const startIndex = page * pageSize + 1;
    const endIndex =
      startIndex < length
        ? Math.min(startIndex + pageSize, length) - 1
        : startIndex + pageSize - 1;
    return this.translateParser.interpolate(this.rangeLabelIntl, {
      startIndex,
      endIndex,
      length,
    });
  };
}

export const createCustomMatPaginatorIntl = (
  translateService: TranslateService,
  translateParser: TranslateParser
) => new WWPaginatorIntl(translateService, translateParser);
