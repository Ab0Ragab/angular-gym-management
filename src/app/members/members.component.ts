import { Component, OnInit } from '@angular/core';
import { MemberService } from '../shared/member.service';
import { map } from 'rxjs/operators';
import { Member } from '../shared/member.model';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
searchText: any;  
members: Member[];
today: number = Date.now();

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.getMembersList();
  }

  getMembersList(): any{
    this.memberService.getMemberList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => 
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(members => {
      this.members = members;
      //console.log(this.members);
    });
  }

  deleteCustomers(){
    this.memberService.deleteAll().catch(err => console.log(err));
  }

  deleteMember(key: string){
    this.memberService.deleteMember(key);
  }

  updateDate(key: string, newDate: Date){
    if(newDate){
      window.alert('participation date is updated successfully!');
    }
    this.memberService.updateMember(key, { date: newDate });
  }

}
