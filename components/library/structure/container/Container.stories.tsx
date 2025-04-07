import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Container } from './Container'

const meta: Meta<typeof Container> = {
	title: 'Layout/Container',
	component: Container,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'radio',
			options: ['small', 'normal', 'large', 'full'],
		},
	},
}

export default meta
type Story = StoryObj<typeof Container>

export const Playground: Story = {
	args: {
		variant: 'normal',
		className: 'text-center pb-4',
		children: (
			<div className="space-y-6 rounded-xl bg-white p-6 shadow-sm">
				<div className="space-y-2">
					<h1 className="text-3xl font-extrabold text-gray-900">Mokku Solutions</h1>
					<p className="text-base leading-relaxed text-gray-700">
						Mokku es una plataforma modular que impulsa el desarrollo de soluciones digitales
						modernas, rápidas y eficientes. Ayuda a equipos a construir apps escalables con
						componentes reutilizables y buenas prácticas desde el día uno.
					</p>
				</div>

				<div className="grid grid-cols-2 gap-4">
					{[
						['🧱 Componentes', 'UI personalizable basada en Tailwind y ShadCN.'],
						['🚀 Performance', 'Arquitectura optimizada para velocidad.'],
						['📦 Reusabilidad', 'Componentes diseñados para múltiples productos.'],
						['🌐 Deploy sin fricción', 'Integración con Vercel, GitHub Pages y más.'],
					].map(([title, desc], i) => (
						<div key={i} className="rounded-lg border bg-white p-4 shadow-sm">
							<h2 className="text-lg font-semibold text-gray-800">{title}</h2>
							<p className="text-sm text-gray-600">{desc}</p>
						</div>
					))}
				</div>

				<p className="text-center text-sm text-gray-500">
					Construido con ♥ por el equipo Mokku — 2025
				</p>
			</div>
		),
	},
	render: (args) => (
		<div className="w-full bg-green-100">
			<div className="mb-4 w-full rounded bg-green-600 p-4 text-sm font-semibold text-white">
				Usá los controles para cambiar el tamaño del Container (small, normal, large, full)
			</div>
			<Container {...args} />
		</div>
	),
}
