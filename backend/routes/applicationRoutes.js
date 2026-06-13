const express = require("express");

const router = express.Router();

const {
apply,
getApplications,
updateStatus
}
=
require(
"../controllers/applicationController"
);

router.post(
"/apply",
apply
);

router.get(
"/all",
getApplications
);

router.put(
"/status",
updateStatus
);

module.exports = router;