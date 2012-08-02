/*
 * File: app/model/Post.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Feed.model.Post', {
    extend: 'Ext.data.Model',
    alias: 'model.post',

    config: {
        fields: [
            {
                name: 'title'
            },
            {
                name: 'author'
            },
            {
                mapping: 'content',
                name: 'story'
            },
            {
                mapping: 'publishedDate',
                name: 'date',
                type: 'date'
            }
        ]
    }
});