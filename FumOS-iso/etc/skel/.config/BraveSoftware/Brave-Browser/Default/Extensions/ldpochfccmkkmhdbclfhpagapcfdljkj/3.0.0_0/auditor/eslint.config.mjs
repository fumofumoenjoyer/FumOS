import globals from 'globals';
import js from '@eslint/js';
import {baseConfiguration} from '../eslint.config.mjs';

export default [

    js.configs.recommended,
    baseConfiguration,

    {
        'languageOptions': {
            'globals': {
                ...globals.node
            }
        }
    }
];
