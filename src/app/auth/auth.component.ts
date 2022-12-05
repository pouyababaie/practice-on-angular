import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { InitialConfig } from '@app/core/services/initial-config.model';
import { InitialConfigService } from '@app/core/services/initial-config.service';

interface FormGroupModel {
  userName: AbstractControl;
  password: AbstractControl;
}
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  config: InitialConfig;
  formGroup: FormGroup;
  rememberMe: boolean = false;
  constructor(private initialConfigService: InitialConfigService) {
    this.formGroup = new FormGroup<FormGroupModel>({
      userName: new FormControl('', []),
      password: new FormControl('', []),
    });
  }

  ngOnInit(): void {}

  getInitialConfig() {
    this.initialConfigService.config.subscribe((result) => {
      this.formGroup.get('userName')?.setValue(result.userName);
      this.formGroup.get('password')?.setValue(result.password);
      this.config = result;
    });
  }
}
