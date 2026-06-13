const express = require("express");

const router = express.Router();

const {
createProfile,
getProfile
}
=
require(
"../controllers/studentController"
);

router.post(
"/create",
createProfile
);

router.get(
"/:id",
getProfile
);

module.exports = router;