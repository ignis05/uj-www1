import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MainScreenComponent } from '../main-screen/main-screen.component'
import { Subpage1ScreenComponent } from '../subpage1-screen/subpage1-screen.component'
import { Subpage2ScreenComponent } from '../subpage2-screen/subpage2-screen.component'

const routes: Routes = [
	{ path: '', component: MainScreenComponent, pathMatch: 'full' },
	{ path: 'subpage1', component: Subpage1ScreenComponent },
	{ path: 'subpage2', component: Subpage2ScreenComponent },
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
