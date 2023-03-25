import { defineConfig } from 'sanity/lib/exports';
import { deskTool } from 'sanity/desk';
// @ts-ignore;
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'default',
  title: 'Ryan Meetup',

  projectId: process.env.PROJECT_ID as string,
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
