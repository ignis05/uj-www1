import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root',
})
export class ThemeService {
	static default = 'light'
	static availThemes = ['light', 'dark']

	private readonly style: HTMLLinkElement

	constructor() {
		this.style = document.createElement('link')
		this.style.rel = 'stylesheet'
		document.head.appendChild(this.style)

		if (localStorage.getItem('theme') !== undefined) {
			this.style.href = `/uj-www1/${this.current}.css`
		}
	}

	get current(): string {
		return localStorage.getItem('theme') ?? ThemeService.default
	}

	set current(value: string) {
		localStorage.setItem('theme', value)
		this.style.href = `/uj-www1/${value}.css`
	}

	toggle() {
		let i = ThemeService.availThemes.indexOf(this.current)
		this.current = ThemeService.availThemes[(i + 1) % ThemeService.availThemes.length]
	}
}
