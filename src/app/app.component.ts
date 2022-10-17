import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ThemeService } from './services/theme.service'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	currentUrl: string = ''
	navLinks = [
		{ title: 'Main Page', url: '/' },
		{ title: 'Subpage 1', url: 'subpage1' },
		{ title: 'Subpage 2', url: 'subpage2' },
	]

	constructor(public route: ActivatedRoute, private theme: ThemeService) {
		this.route.url.subscribe((activeUrl) => {
			this.currentUrl = window.location.pathname
		})
	}

	switchTheme(): void {
		this.theme.toggle()
	}
}
