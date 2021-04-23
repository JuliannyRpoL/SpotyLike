import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInFormComponent } from './log-in-form.component';

describe('LogInFormComponent', () => {
  let component: LogInFormComponent;
  let fixture: ComponentFixture<LogInFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogInFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('email mal escrito y contraseña vacía', () => {
    component.user = 'ejemplo';
    component.handleLogin();

    expect(component.emailError).toEqual('Ingrese un email válido');
    expect(component.passwordError).toEqual('Ingrese una contraseña');
  });

  it('email vacío', () => {
    component.handleLogin();
    expect(component.emailError).toEqual('Ingrese un email válido');
  });

  it('email mal escrito y contraseña escrita', () => {
    component.user = 'ejemplo';
    component._password = 'unacontraseña';
    component.handleLogin();

    expect(component.emailError).toEqual('Ingrese un email válido');
    expect(component.passwordError).toEqual('');
  });

  it('email bien escrito y contraseña vacía', () => {
    component.user = 'ejemplo@prueba.com';
    component.handleLogin();

    expect(component.emailError).toEqual('');
    expect(component.passwordError).toEqual('Ingrese una contraseña');
  });

  it('email no registrado', async () => {
    component.user = 'ejemplo@prueba.com';
    component._password = 'unacontraseña';
    await component.handleLogin();

    expect(component.emailError).toEqual('');
    expect(component.passwordError).toEqual('Credenciales incorrectas');
  });

  it('contraseña incorrecta', async () => {
    component.user = 'yuli6303@gmail.com';
    component._password = 'unacontraseña';
    await component.handleLogin();

    expect(component.emailError).toEqual('');
    expect(component.passwordError).toEqual('Credenciales incorrectas');
  });
});
