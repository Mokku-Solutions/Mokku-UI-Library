import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Container } from "./Container";

const meta: Meta<typeof Container> = {
	title: "Layout/Container",
	component: Container,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "radio",
			options: ["small", "normal", "large", "full"],
		},
	},
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Playground: Story = {
	args: {
		variant: "normal",
		className: "text-center pb-4",
		children: (
			<div className="space-y-6 bg-white rounded-xl shadow-sm p-6">
				<div className="space-y-2">
					<h1 className="text-3xl font-extrabold text-gray-900">Mokku Solutions</h1>
					<p className="text-gray-700 text-base leading-relaxed">
						Mokku es una plataforma modular que impulsa el desarrollo de soluciones digitales modernas, rápidas y
						eficientes. Ayuda a equipos a construir apps escalables con componentes reutilizables y buenas prácticas
						desde el día uno.
					</p>
				</div>

				<div className="grid grid-cols-2 gap-4">
					{[
						["🧱 Componentes", "UI personalizable basada en Tailwind y ShadCN."],
						["🚀 Performance", "Arquitectura optimizada para velocidad."],
						["📦 Reusabilidad", "Componentes diseñados para múltiples productos."],
						["🌐 Deploy sin fricción", "Integración con Vercel, GitHub Pages y más."],
					].map(([title, desc], i) => (
						<div key={i} className="p-4 rounded-lg bg-white border shadow-sm">
							<h2 className="text-lg font-semibold text-gray-800">{title}</h2>
							<p className="text-sm text-gray-600">{desc}</p>
						</div>
					))}
				</div>

				<p className="text-sm text-gray-500 text-center">Construido con ♥ por el equipo Mokku — 2025</p>
			</div>
		),
	},
	render: (args) => (
		<div className="w-full bg-green-100">
			<div className="w-full mb-4 p-4 text-sm bg-green-600 text-white font-semibold rounded">
				Usá los controles para cambiar el tamaño del Container (small, normal, large, full)
			</div>
			<Container {...args} />
		</div>
	),
};
