import { SessionListComponent } from './session-list.component';
import { ISession} from '../shared';

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  let mockAuthService;
  let mockVoterService;

  beforeEach(() => {
    component = new SessionListComponent(mockAuthService, mockVoterService);
  });

  describe('ngOnChange', () => {
    it('should filter the session correctly', () => {
      component.sessions = <ISession[]>[
        {name: 'session 1', level: 'intermediate'},
        {name: 'session 2', level: 'intermediate'},
        {name: 'session 3', level: 'beginner'},
      ];
      component.filterBy = 'intermediate';
      component.sortBy = 'name';
      component.eventId = 3;

      component.ngOnChanges();

      expect(component.visibleSessions.length).toBe(2);
    });

    it('should sort the session correctly', () => {
      component.sessions = <ISession[]>[
        {name: 'session 2', level: 'intermediate'},
        {name: 'session 3', level: 'beginner'},
        {name: 'session 1', level: 'intermediate'},
      ];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 3;

      component.ngOnChanges();

      expect(component.visibleSessions[0].name).toBe('session 1');
      expect(component.visibleSessions[1].name).toBe('session 2');
      expect(component.visibleSessions[2].name).toBe('session 3');
    });
  });
});

