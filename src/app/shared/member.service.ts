import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Member } from './member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

private dbPath = '/members';

memberRef: AngularFireList<Member> = null;

  constructor(private db: AngularFireDatabase) {
    this.memberRef = this.db.list(this.dbPath);
   }

   createMember(member: Member){
     this.memberRef.push(member);
   }

   updateMember(key: string, value: any): Promise<void>{
     return this.memberRef.update(key, value);
   }

   deleteMember(key: string): Promise<void>{
    return this.memberRef.remove(key);
  }

  getMemberList(): AngularFireList<Member>{
    return this.memberRef;
  }

  deleteAll(): Promise<void>{
    return this.memberRef.remove();
  }
}
