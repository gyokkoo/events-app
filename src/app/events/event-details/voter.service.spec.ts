import { VoterService } from './voter.service';
import { ISession } from '../shared';
import {Observable, of} from 'rxjs';

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
  });

});

