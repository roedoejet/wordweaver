import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { EveryVoiceModule } from "EveryVoice";
import { TierComponent } from "./tier.component";
import { everyVoiceConfig } from "../../../environments/environment";
describe("TierComponent", () => {
  let component: TierComponent;
  let fixture: ComponentFixture<TierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EveryVoiceModule.forRoot(everyVoiceConfig)],
      declarations: [TierComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TierComponent);
    component = fixture.componentInstance;
    component.tier = {
      key: 0,
      name: "breakdown",
      separator: "",
      position: 0,
      options: { language: "L1" },
    };
    component.data = {
      input: { agent: "test", patient: "test", option: "test", root: "test" },
      output: [],
    };
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
