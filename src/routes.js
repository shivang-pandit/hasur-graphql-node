const { Router } = require('express');
const controller = require('./controller')

const router = Router();

router.post('/login', controller.login);
router.post('/search_users', controller.searchUser);
router.post('/users', controller.userList);

module.exports = router;