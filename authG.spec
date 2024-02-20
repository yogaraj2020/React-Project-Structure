import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { MsalService } from '@azure/msal-angular';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;
  let msalServiceSpy: jasmine.SpyObj<MsalService>;

  beforeEach(() => {
    const msalServiceSpyObj = jasmine.createSpyObj('MsalService', ['instance']);
    msalServiceSpyObj.instance.getActiveAccount = jasmine.createSpy().and.returnValue(true);
    msalServiceSpyObj.instance.idTokenClaims = { groups: ['admin'] };
    
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AuthGuard,
        { provide: MsalService, useValue: msalServiceSpyObj }
      ]
    });
    guard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
    msalServiceSpy = TestBed.inject(MsalService) as jasmine.SpyObj<MsalService>;
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow access if user is authenticated and belongs to groups', () => {
    const result = guard.canActivate();

    expect(result).toBeTrue();
  });

  it('should navigate to unauth if user is not authenticated', () => {
    msalServiceSpy.instance.getActiveAccount.and.returnValue(false);

    const navigateSpy = spyOn(router, 'navigate');
    const result = guard.canActivate();

    expect(result).toBeFalse();
    expect(navigateSpy).toHaveBeenCalledWith(['/unauth']);
  });

  it('should navigate to unauth if user does not belong to groups', () => {
    msalServiceSpy.instance.idTokenClaims = {};

    const navigateSpy = spyOn(router, 'navigate');
    const result = guard.canActivate();

    expect(result).toBeFalse();
    expect(navigateSpy).toHaveBeenCalledWith(['/unauth']);
  });
});