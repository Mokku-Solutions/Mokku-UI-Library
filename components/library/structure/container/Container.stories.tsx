import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Container from "./Container";

const meta: Meta<typeof Container> = {
	title: "Layout/Container",
	component: Container,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: { type: "radio" },
			options: ["small", "normal", "large", "full"],
		},
	},
};

export default meta;
type Story = StoryObj<typeof Container>;

export const ResponsiveExample: Story = {
	args: {
		variant: "normal",
		children: (
			<div className="space-y-6 p-6 bg-white rounded-xl shadow-sm">
				<div className="space-y-2">
					<h1 className="text-3xl font-extrabold text-gray-900">Mokku Solutions</h1>
					<p className="text-gray-700 text-base leading-relaxed">
						Mokku es una plataforma modular que impulsa el desarrollo de soluciones digitales modernas, rápidas y
						eficientes. Ayuda a equipos a construir apps escalables con componentes reutilizables y buenas prácticas
						desde el día uno.
					</p>
				</div>

				<div className="grid grid-cols-2 gap-4">
					<div className="p-4 rounded-lg bg-white border shadow-sm">
						<h2 className="text-lg font-semibold text-gray-800">🧱 Componentes</h2>
						<p className="text-sm text-gray-600">
							Biblioteca de UI personalizable basada en Tailwind y ShadCN para proyectos web y móviles.
						</p>
					</div>
					<div className="p-4 rounded-lg bg-white border shadow-sm">
						<h2 className="text-lg font-semibold text-gray-800">🚀 Performance</h2>
						<p className="text-sm text-gray-600">
							Arquitectura optimizada para velocidad, modularidad y experiencia de desarrollo fluida.
						</p>
					</div>
					<div className="p-4 rounded-lg bg-white border shadow-sm">
						<h2 className="text-lg font-semibold text-gray-800">📦 Reusabilidad</h2>
						<p className="text-sm text-gray-600">
							Componentes y utilidades diseñadas para ser reutilizadas en múltiples apps y productos.
						</p>
					</div>
					<div className="p-4 rounded-lg bg-white border shadow-sm">
						<h2 className="text-lg font-semibold text-gray-800">🌐 Deploy sin fricción</h2>
						<p className="text-sm text-gray-600">
							Integración directa con Vercel, GitHub Pages o infraestructura propia.
						</p>
					</div>
				</div>

				<p className="text-sm text-gray-500 text-center">Construido con ♥ por el equipo Mokku — 2025</p>
			</div>
		),
	},
	render: (args) => (
		<div className="w-full bg-green-300">
			<div className="w-full mb-4 p-4 text-sm  bg-green-600 text-white">
				! Usá los controles de abajo para cambiar el tamaño del Container (small, normal, large, full)
			</div>
			<Container {...args} />
		</div>
	),
};
