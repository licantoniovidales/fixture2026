# App Fixture Mundial FIFA 2026

Aplicacion web responsive para crear y gestionar el fixture oficial del Mundial 2026:

- Login/registro de usuarios
- Gestion de torneos por usuario
- Carga/edicion de selecciones (48 equipos, 12 grupos)
- Generacion automatica de partidos (grupos + estructura de eliminatoria)
- Exportaciones: PDF, Excel y SVG

## Stack

- Next.js 14 + TypeScript + App Router
- Tailwind CSS
- Prisma + PostgreSQL
- NextAuth (credenciales)
- `pdf-lib` / `xlsx`

## Configuracion rapida

1. Copiar variables:

```bash
cp .env.example .env
```

2. Instalar dependencias:

```bash
npm install
```

3. Generar cliente Prisma:

```bash
npm run prisma:generate
```

4. Crear/migrar base:

```bash
npm run prisma:migrate -- --name init
```

5. Ejecutar en desarrollo:

```bash
npm run dev
```

## Estructura principal

- `app/(public)/login`, `app/(public)/register`
- `app/(dashboard)/tournaments`
- `app/(dashboard)/tournaments/[id]/teams`
- `app/(dashboard)/tournaments/[id]/fixture`
- `app/api/*` (auth, torneos, equipos, fixture, export)
- `src/domain/fifa2026/*` (reglas + generacion)
- `prisma/schema.prisma`

## Estado actual

Base funcional implementada para v1, incluyendo:

- Autenticacion y aislamiento por usuario
- CRUD base de torneos y selecciones
- Validaciones de reglas principales FIFA 2026
- Generacion inicial de fixture
- Exportaciones descargables

> Nota: el mapeo exacto oficial de cruces con "mejores terceros" quedo preparado para evolucionar en el modulo de dominio.
