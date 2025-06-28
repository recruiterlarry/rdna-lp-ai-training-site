import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "landingPage",
        label: "Landing Page",
        path: "content",
        match: {
          include: "landing-page",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Page Title",
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Page Subtitle",
          },
          {
            type: "string",
            name: "description",
            label: "Meta Description",
          },
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              {
                type: "string",
                name: "headline",
                label: "Main Headline",
                required: true,
              },
              {
                type: "string",
                name: "subheadline",
                label: "Sub Headline",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "primaryCTA",
                label: "Primary CTA Button Text",
              },
              {
                type: "string",
                name: "secondaryCTA",
                label: "Secondary CTA Button Text",
              },
              {
                type: "image",
                name: "heroImage",
                label: "Hero Image",
              },
            ],
          },
          {
            type: "object",
            name: "problems",
            label: "Problems Section",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Problem Title",
              },
              {
                type: "string",
                name: "description",
                label: "Problem Description",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "program",
            label: "Program Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Program Title",
              },
              {
                type: "string",
                name: "description",
                label: "Program Description",
              },
              {
                type: "object",
                name: "phases",
                label: "Program Phases",
                list: true,
                fields: [
                  {
                    type: "number",
                    name: "id",
                    label: "Phase Number",
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Phase Title",
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Phase Description",
                  },
                  {
                    type: "string",
                    name: "color",
                    label: "Color Class",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "benefits",
            label: "Benefits Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Benefits Title",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Benefits Subtitle",
              },
              {
                type: "object",
                name: "stats",
                label: "Statistics",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "percentage",
                    label: "Percentage",
                  },
                  {
                    type: "string",
                    name: "label",
                    label: "Stat Label",
                  },
                  {
                    type: "string",
                    name: "color",
                    label: "Color Class",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "testimonials",
            label: "Testimonials",
            list: true,
            fields: [
              {
                type: "string",
                name: "name",
                label: "Name",
              },
              {
                type: "string",
                name: "role",
                label: "Role/Title",
              },
              {
                type: "string",
                name: "avatar",
                label: "Avatar Initials",
              },
              {
                type: "string",
                name: "quote",
                label: "Testimonial Quote",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "pricing",
            label: "Pricing Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Pricing Title",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Pricing Subtitle",
              },
              {
                type: "string",
                name: "price",
                label: "Main Price",
              },
              {
                type: "string",
                name: "description",
                label: "Price Description",
              },
              {
                type: "object",
                name: "options",
                label: "Payment Options",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "label",
                    label: "Option Label",
                  },
                  {
                    type: "string",
                    name: "price",
                    label: "Option Price",
                  },
                ],
              },
              {
                type: "string",
                name: "enrollCTA",
                label: "Enrollment CTA Text",
              },
            ],
          },
          {
            type: "object",
            name: "faq",
            label: "FAQ Section",
            list: true,
            fields: [
              {
                type: "string",
                name: "question",
                label: "Question",
              },
              {
                type: "string",
                name: "answer",
                label: "Answer",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "finalCTA",
            label: "Final CTA Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "CTA Title",
              },
              {
                type: "string",
                name: "subtitle",
                label: "CTA Subtitle",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "guarantee",
                label: "Guarantee Headline",
              },
              {
                type: "string",
                name: "guaranteeText",
                label: "Guarantee Text",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "primaryCTA",
                label: "Primary CTA Text",
              },
              {
                type: "string",
                name: "secondaryCTA",
                label: "Secondary CTA Text",
              },
            ],
          },
          {
            type: "object",
            name: "contact",
            label: "Contact Information",
            fields: [
              {
                type: "string",
                name: "email",
                label: "Email Address",
              },
              {
                type: "string",
                name: "phone",
                label: "Phone Number",
              },
              {
                type: "string",
                name: "supportText",
                label: "Support Text",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Page Content",
            isBody: true,
          },
        ],
      },
    ],
  },
});

