import { Observable, of } from 'rxjs';

export  interface ComponentCanDeactivate{
    canDeactivate(): boolean | Observable<boolean> | Promise<boolean>;
}