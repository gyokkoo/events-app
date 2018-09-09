import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SessionListComponent } from './session-list.component';
import { UpVoteComponent } from './up-vote.component';
import { DurationPipe } from '../shared';
import { CollapsibleWellComponent } from '../../common';
import { AuthService } from '../../user/auth.service';
import { VoterService } from './voter.service';
import { ISession } from '../shared';

describe('SessionListComponent', function () {
  let fixture: ComponentFixture<SessionListComponent>;
  let component: SessionListComponent;
  let element: HTMLElement;
  let debugElement: DebugElement;

  beforeEach(async() => {
    const mockAuthService = {
      isAuthenticated: () => true,
      currentUser: {username: 'Ivan'}
    };
    const mockVoterService = {
      userHasVoted: () => true
    };

    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        SessionListComponent,
        UpVoteComponent,
        DurationPipe,
        CollapsibleWellComponent
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoterService, useValue: mockVoterService }
      ],
      schemas: []
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    element = fixture.nativeElement;
  });

  describe('initial display', () => {
    it('should have the correct session title', () => {
      component.sessions = [{
        id: 3,
        name: 'Session 1',
        presenter: 'Ivan',
        duration: 1,
        level: 'beginner',
        abstract: 'abstract',
        voters: ['George', 'Paul'],
      }];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 4;

      component.ngOnChanges();
      fixture.detectChanges();

      //expect(element.querySelector('[well-tittle]').textContent).toContain('Session 1');

      expect(debugElement.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');
    });
  });
});
