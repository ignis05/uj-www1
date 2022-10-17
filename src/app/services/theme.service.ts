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
		this.style.href = `/uj-www1/${this.current}.css`

		document.head.appendChild(this.style)
	}

	get current(): string {
		return localStorage.getItem('theme') || ThemeService.default
	}

	set current(value: string) {
		console.log(`Setting theme to: ${value}`)
		localStorage.setItem('theme', value)
		this.style.href = `/uj-www1/${value}.css`
	}

	toggle() {
		let i = ThemeService.availThemes.indexOf(this.current)
		this.current = ThemeService.availThemes[(i + 1) % ThemeService.availThemes.length]
	}
}
