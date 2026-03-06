import { defineCollection, z } from 'astro:content';

const studyPlan = defineCollection({
    type: 'content',
    schema: z.object({
        day: z.number(),
        title: z.string(),
        references: z.array(z.string()),
        keyVerse: z.string(),
        keyVerseReference: z.string(),
        reflectionQuestions: z.array(z.string()),
        prayerFocus: z.string(),
        category: z.enum(['Old Testament', 'New Testament', 'Psalms/Proverbs', 'Hybrid']).default('Hybrid'),
    }),
});

const bibleSchool = defineCollection({
    type: 'content',
    schema: z.object({
        module: z.number(),
        title: z.string(),
        description: z.string(),
        icon: z.string().default('book'),
        order: z.number(),
    }),
});

const childrenZone = defineCollection({
    type: 'content',
    schema: z.object({
        ageBand: z.enum(['4-6', '7-9', '10-12']),
        title: z.string(),
        memoryVerse: z.string(),
        questions: z.array(z.string()),
    }),
});

export const collections = {
    'study-plan': studyPlan,
    'bible-school': bibleSchool,
    'children-zone': childrenZone,
};
