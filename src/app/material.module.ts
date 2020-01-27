import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

const materialModuleList = [
    MatButtonModule,
    MatInputModule,
    MatIconModule
]
@NgModule({
    declarations: [],
    imports: materialModuleList,
    exports: materialModuleList
})
export class MaterialModuleImports { }