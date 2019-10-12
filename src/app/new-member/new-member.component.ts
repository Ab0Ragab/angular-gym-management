import { Component, OnInit } from '@angular/core';
import { Member } from '../shared/member.model';
import { MemberService } from '../shared/member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css']
})
export class NewMemberComponent implements OnInit {

  constructor(private memberService: MemberService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(f: Member){
    this.memberService.createMember(f);
    window.alert('member was added successfuly!');
    this.router.navigate(['/members']);
  }

}
