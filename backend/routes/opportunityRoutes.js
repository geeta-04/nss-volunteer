const express = require("express");

const router = express.Router();

const {
createOpportunity,
getOpportunities
}
=
require(
"../controllers/opportunityController"
);

router.post(
"/create",
createOpportunity
);

router.get(
"/all",
getOpportunities
);

module.exports = router;