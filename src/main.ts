#!/usr/bin/env node

import { cli } from "./cli/main.js";

async function boot(){
    await cli();
}
await boot();