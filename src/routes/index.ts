import express from 'express';
import * as controller from "../controllers/controller";

export const router = express.Router();

// GET
router.get('/layout/init', controller.layoutData);
router.get('/components/langs?component=layoutDefault.tNavigationPages', controller.navigationPages)

// POST
router.post('/vipSystem/getUserLevel', controller.userLevelData);