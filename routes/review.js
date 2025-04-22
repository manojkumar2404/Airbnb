const express = require("express");
const router = express.Router({ mergeParams: true});
const wrapAsync = require("../utils/wrapAsunc.js")
const ExpressError = require("../utils/ExpressError.js")
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const { createReview, destroyReview } = require("../controllers/reviews.js");


//Reviews post route
router.post("/",isLoggedIn, validateReview, wrapAsync(createReview)
);

//Reviews Delete route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(destroyReview)
);

module.exports = router;