import { Router } from 'express'
import * as PokemonController from './controllers/PokemonController'

const router = Router()

router.get('/', (req, res) => {
    console.log('App running')
    return res.status(200).json({message: "Status message: app running"})
})

router.get('/pokemon', PokemonController.getAll)

export default router