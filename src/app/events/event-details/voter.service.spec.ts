import { VoterService } from './voter.service';
import { ISession } from '../shared';
import { of} from 'rxjs';

describe('VoterService', () => {

  let voterService: VoterService;
  let mockHttp;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
    voterService = new VoterService(mockHttp);
    
  });


  describe('deleteVoter', function () {
    it('should remove the voter from the list of voters', () => {
      const session = { id: 6, voters: ['Ivan', 'George'] };
      mockHttp.delete.and.returnValue(of(false));

      voterService.deleteVoter(3, <ISession>session, 'Ivan');

      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe('George');
    });

    it('should call http.delete with the right URL', () => {
      const session = { id: 6, voters: ['Ivan', 'George'] };
      mockHttp.delete.and.returnValue(of(false));

      voterService.deleteVoter(3, <ISession>session, 'Ivan');

      expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/Ivan');
    });
  });

  describe('addVoter', () => {
    it('should call http.post with the right URL', () => {
      const session = { id: 6, voters: ['Ivan', 'George'] };
      mockHttp.post.and.returnValue(of(false));

      voterService.addVoter(3, <ISession>session, 'Ivan');

      expect(mockHttp.post).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/Ivan', {}, jasmine.any(Object));
    });
  });
});

