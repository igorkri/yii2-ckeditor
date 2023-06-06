/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#6e86dc';
	// config.toolbar = 'Basic';
    config.useComputedState = true,
    config.extraPlugins = 'video',
    config.allowedContent = true; /* all tags */
};
