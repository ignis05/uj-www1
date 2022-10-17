import { Component, OnInit } from '@angular/core'
import { ThemeService } from 'src/app/services/theme.service'

@Component({
	selector: 'app-theme-switcher',
	templateUrl: './theme-switcher.component.html',
	styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent implements OnInit {
	iconMap = new Map(
		Object.entries({
			dark: 'light_mode',
			light: 'dark_mode',
		})
	)

	currentIcon = ''

	constructor(private theme: ThemeService) {
		this.currentIcon = this.iconMap.get(this.theme.current) || ''
	}

	ngOnInit(): void {}

	switchTheme(): void {
		this.theme.toggle()
    this.currentIcon = this.iconMap.get(this.theme.current) || ''
	}
}
