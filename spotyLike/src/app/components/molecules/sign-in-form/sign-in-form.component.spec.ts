import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInFormComponent } from './sign-in-form.component';

describe('SignInFormComponent', () => {
  let component: SignInFormComponent;
  let fixture: ComponentFixture<SignInFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignInFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('email mal escrito y contraseña vacía', () => {
    component.user = 'ejemplo';
    component.handleSignIn();

    expect(component.emailError).toEqual('Ingrese un email válido');
    expect(component.passwordError).toEqual('Ingrese una contraseña válida');
  });

  it('email vacío', () => {
    component.handleSignIn();
    expect(component.emailError).toEqual('Ingrese un email válido');
  });

  it('email mal escrito y contraseña válida', () => {
    component.user = 'ejemplo';
    component.password = 'Prueba123*';
    component.handleSignIn();

    expect(component.emailError).toEqual('Ingrese un email válido');
    expect(component.passwordError).toEqual('');
  });

  it('contraseña menor a 8 caracteres', () => {
    component.password = 'hola';
    component.handleSignIn();

    expect(component.passwordError).toEqual('Ingrese una contraseña válida');
  });

  it('contraseña minusculas', () => {
    component.password = 'hola';
    component.handleSignIn();

    expect(component.passwordError).toEqual('Ingrese una contraseña válida');
  });

  it('contraseña minusculas y mayuscula', () => {
    component.password = 'Holacomoestas';
    component.handleSignIn();

    expect(component.passwordError).toEqual('Ingrese una contraseña válida');
  });

  it('contraseña minusculas, mayuscula y numero', () => {
    component.password = 'Holacomoestas5';
    component.handleSignIn();

    expect(component.passwordError).toEqual('Ingrese una contraseña válida');
  });

  it('contraseña minusculas, mayuscula, numero y caracter especial', () => {
    component.password = 'Holacomoestas5*';
    component.handleSignIn();

    expect(component.passwordError).toEqual('');
  });

  it('email ya registrado', async () => {
    component.user = 'yuli6303@gmail.com';
    component.password = 'Prueba123*';
    await component.handleSignIn();

    expect(component.emailError).toEqual('');
    expect(component.passwordError).toEqual('Este email ya está en uso');
  });
});
