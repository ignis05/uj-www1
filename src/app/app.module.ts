import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './modules/app-routing.module';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { Subpage1ScreenComponent } from './components/subpage1-screen/subpage1-screen.component';
import { Subpage2ScreenComponent } from './components/subpage2-screen/subpage2-screen.component'

@NgModule({
	declarations: [AppComponent, MainScreenComponent, Subpage1ScreenComponent, Subpage2ScreenComponent],
	imports: [BrowserModule, NgbModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
