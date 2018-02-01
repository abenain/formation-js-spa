'use strict';

const path = require('path')

// Development specific configuration
// ==================================
module.exports = {
	// Root path of server
	root: path.normalize(__dirname + '/../../..'),

	// MongoDB connection options
	mongo: {
		uri: 'mongodb://localhost/followracer'
	},

	// Credentials pour l'accès au repository dans le cloud
	openstackCredentials: {
		provider: 'amazon',
		/* Manu AWS access*/
		keyId   : 'AKIAIIHFR75LEEW6URVQ',
		key     : 's+2wR1iFJSeHicddrAgUeS6iyG6kS1GRpTnQ0hcE',
		region  : 'eu-west-1'
	},

	// Keys pour le paiement Stripe
	stripeKeys: {
		secret     : "sk_test_DQ8Ch5COa6jxUE8V6e8BP4pZ",
		publishable: "pk_test_TXTmMrgimEZSfuRPKJ8jxohl"
	},

	// Keys d'API pour Facebook
	fbCredentials: {
		appId    : 831325236908127,
		appSecret: "9c32b486ae126366e26c67e390ef331d"
	},

	email: {
		contactAddress: 'FollowRacer Dev <photopuce.abn@gmail.com>'
	},

	// SMTP server configuration
	smtp: {
		user    : 'followracer-production',
		password: 'WGEaD&y1-OXc.=$'
	},

	followRacerWebsiteUrl: "http://localhost:8080",
	followRacerConsoleUrl: "http://localhost:8081",
	followRacerLivetrackingUrl: "http://localhost:8082",
	followRacerBackendUrl: "http://localhost:9000",

	seedDB: false,

	cloudContainerName: "followracer-test",
	cloudProcessPhotoQueueUrl: 'https://sqs.eu-west-1.amazonaws.com/118088038480/dev-process-photo',
	cloudProcessPhotoPromoQueueUrl: 'https://sqs.eu-west-1.amazonaws.com/118088038480/dev-process-photo-promo',
	cloudRepository: false,

	// Chemin vers le repository local de photos
	localPhotoRepo: path.join(__dirname, '..', 'seed', 'development-files', 'photo_repository')
}
