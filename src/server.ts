import Fastify from 'fastify'
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod'
import { deckRoutes } from './routes/decks'
import { cardRoutes } from './routes/cards'

const app = Fastify({ logger: true })

// configuração pro Zod funcionar com o Fastify
app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

// registros das rotas 
app.register(deckRoutes)
app.register(cardRoutes)

// iniciando o servidor na porta 3333
app.listen({ port: 3333 }).then(() => {
  console.log('Server online')
})