const { Router } = require('express')
const Link = require('../models/Link')

const router = new Router()

router.get('/:code', async (req, res) => {
  try {
    
    const link = await Link.findOne({ code: req.params.code })

    if (link) {
      link.clicks++
      await link.save()
      res.redirect(link.from)
    }

    req.status(404).json('Link not found')

  } catch (e) {
    res.status(500).json({ message: 'Something went wrong((('})
  }
})

module.exports = router
