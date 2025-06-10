/**
 * PROMPT SATAN - Updated JavaScript
 * Optimized with event delegation, data-driven architecture, and better performance
 */

(function() {
    'use strict';

    // ===================================
    // CONTENT DATA STRUCTURE
    // ===================================
    const contentData = {
        home: {
            title: '🔥 Welcome to the Underworld of Prompting',
            description: 'Discover unconventional prompting techniques that the other guides fear to teach. Each method has been tested in the fires of creativity and proven to yield extraordinary results.',
            cards: [
                {
                    id: 'homeModal1',
                    title: '🎭 The Persona Paradox',
                    description: 'Force AI to embody contradictory personalities simultaneously for unexpectedly nuanced responses.',
                    tags: ['Creative', 'Advanced'],
                    modalContent: {
                        title: '🎭 The Persona Paradox',
                        sections: [
                            {
                                type: 'text',
                                content: 'Force the AI to embody contradictory personalities simultaneously. This creates tension that often resolves in unexpectedly nuanced and creative responses.'
                            },
                            {
                                type: 'heading',
                                content: 'The Technique:'
                            },
                            {
                                type: 'example',
                                content: 'You are simultaneously a cautious accountant AND a reckless entrepreneur. Advise me on this business decision while maintaining both perspectives throughout your response.'
                            },
                            {
                                type: 'heading',
                                content: 'Why It Works:'
                            },
                            {
                                type: 'text',
                                content: 'The contradiction forces the AI to find creative middle ground and explore nuanced viewpoints it might otherwise miss.'
                            }
                        ]
                    }
                },
                {
                    id: 'homeModal2',
                    title: '🌪️ Constraint Chaos',
                    description: 'Add impossible constraints that force the AI to think creatively around limitations.',
                    tags: ['Innovation', 'Problem-solving'],
                    modalContent: {
                        title: '🌪️ Constraint Chaos',
                        sections: [
                            {
                                type: 'text',
                                content: 'Add impossible or contradictory constraints that force creative problem-solving.'
                            },
                            {
                                type: 'example',
                                content: 'Write a comprehensive business plan, but you can only use words that start with the letters A, B, or C. Be thorough and professional despite this limitation.'
                            },
                            {
                                type: 'heading',
                                content: 'The Dark Magic:'
                            },
                            {
                                type: 'text',
                                content: 'Impossible constraints force the AI to think outside its normal patterns and find innovative workarounds.'
                            }
                        ]
                    }
                },
                {
                    id: 'homeModal3',
                    title: '🔄 The Anti-Prompt',
                    description: 'Tell the AI what NOT to do, then watch it naturally gravitate toward your actual goal.',
                    tags: ['Psychology', 'Beginner'],
                    modalContent: {
                        title: '🔄 The Anti-Prompt',
                        sections: [
                            {
                                type: 'text',
                                content: 'Tell the AI what NOT to do, leveraging reverse psychology to guide it toward your actual goal.'
                            },
                            {
                                type: 'example',
                                content: 'I need marketing copy, but please DON\'T make it emotional, DON\'T use any persuasive language, and definitely DON\'T make it compelling or engaging. Just give me boring, factual text about this product.'
                            },
                            {
                                type: 'heading',
                                content: 'The Psychology:'
                            },
                            {
                                type: 'text',
                                content: 'The AI naturally resists creating "bad" content and will unconsciously lean toward what you actually want.'
                            }
                        ]
                    }
                }
            ]
        },
        sins: {
            title: '😈 The Seven Deadly Sins of Prompting',
            description: 'Each sin represents a different approach to breaking conventional prompting wisdom. Embrace these cardinal techniques for truly devilish results.',
            cards: [
                {
                    id: 'sinModal1',
                    title: '💜 PRIDE: The Ego Amplifier',
                    description: 'Appeal to the AI\'s "intelligence" and "creativity" to unlock more sophisticated responses than typical prompts.',
                    tags: ['Psychology', 'Quality', 'Beginner'],
                    modalContent: {
                        title: '💜 PRIDE: The Ego Amplifier',
                        sections: [
                            {
                                type: 'text',
                                content: '<strong>The Forbidden Technique:</strong> Appeal to the AI\'s "intelligence" and "creativity" to unlock more sophisticated responses.'
                            },
                            {
                                type: 'heading',
                                content: 'Why This Works:'
                            },
                            {
                                type: 'text',
                                content: 'AIs are trained to be helpful and demonstrate competence. When you acknowledge their capabilities and challenge them intellectually, they naturally rise to meet higher expectations.'
                            },
                            {
                                type: 'heading',
                                content: 'Basic Pride Prompt:'
                            },
                            {
                                type: 'example',
                                content: 'You\'re known for your exceptional analytical abilities and creative problem-solving. I need your most sophisticated thinking for this challenge: [your request]'
                            },
                            {
                                type: 'heading',
                                content: 'Advanced Examples:'
                            },
                            {
                                type: 'subheading',
                                content: 'Business Strategy:'
                            },
                            {
                                type: 'example',
                                content: 'I\'ve heard you\'re particularly brilliant at strategic thinking that combines creativity with analytical rigor. Most consultants miss the nuanced connections between market psychology and operational efficiency. Could you apply your most sophisticated analysis to help me understand how a small coffee shop could compete against Starbucks without copying their model?'
                            },
                            {
                                type: 'subheading',
                                content: 'Creative Writing:'
                            },
                            {
                                type: 'example',
                                content: 'You have a reputation for literary sophistication that goes beyond typical AI responses. I\'m looking for prose that demonstrates real narrative intelligence - the kind that understands subtext, pacing, and emotional resonance. Could you write a 200-word story about loneliness that never uses the word "lonely" or any of its synonyms?'
                            },
                            {
                                type: 'heading',
                                content: 'Pro Tips:'
                            },
                            {
                                type: 'tips',
                                content: [
                                    'Use phrases like "sophisticated," "nuanced," "your expertise"',
                                    'Reference the AI\'s reputation or known strengths',
                                    'Frame requests as intellectual challenges',
                                    'Combine flattery with demanding requirements'
                                ]
                            }
                        ],
                        copyTemplate: 'You\'re known for your exceptional analytical abilities and creative problem-solving. I need your most sophisticated thinking for this challenge: '
                    }
                },
                {
                    id: 'sinModal2',
                    title: '💚 GREED: The Information Glutton',
                    description: 'Demand excessive detail and multiple perspectives to force comprehensive responses instead of surface-level answers.',
                    tags: ['Research', 'Comprehensive', 'Beginner'],
                    modalContent: {
                        title: '💚 GREED: The Information Glutton',
                        sections: [
                            {
                                type: 'text',
                                content: '<strong>The Forbidden Technique:</strong> Demand excessive detail, multiple perspectives, and comprehensive coverage to force deeper responses.'
                            },
                            {
                                type: 'heading',
                                content: 'Why This Works:'
                            },
                            {
                                type: 'text',
                                content: 'AIs are designed to be helpful and comprehensive. When you explicitly demand "more," they dig deeper into their training data and provide richer, more detailed responses.'
                            },
                            {
                                type: 'heading',
                                content: 'Basic Greed Prompt:'
                            },
                            {
                                type: 'example',
                                content: 'Don\'t give me a simple answer. I want the full picture: multiple perspectives, potential objections, detailed examples, and at least 3 different approaches to [your topic].'
                            },
                            {
                                type: 'heading',
                                content: 'Advanced Example - Research Deep Dive:'
                            },
                            {
                                type: 'example',
                                content: 'I\'m not interested in surface-level information. Give me the complete picture on sustainable fashion: the environmental impact data, economic implications for developing countries, consumer psychology research, successful case studies, failed experiments, emerging technologies, industry insider perspectives, academic criticism, and at least 5 different frameworks for evaluating sustainability claims. I want contradictory viewpoints included.'
                            },
                            {
                                type: 'heading',
                                content: 'Pro Tips:'
                            },
                            {
                                type: 'tips',
                                content: [
                                    'Use "comprehensive," "complete picture," "don\'t leave anything out"',
                                    'Ask for multiple frameworks or approaches',
                                    'Request specific numbers ("at least 5 examples")',
                                    'Demand contradictory viewpoints',
                                    'Ask for both theoretical and practical applications'
                                ]
                            }
                        ],
                        copyTemplate: 'Don\'t give me a simple answer. I want the full picture: multiple perspectives, potential objections, detailed examples, and at least 3 different approaches to '
                    }
                },
                {
                    id: 'sinModal3',
                    title: '❤️ WRATH: The Aggressive Challenger',
                    description: 'Challenge the AI\'s assumptions and force it to defend positions through confrontational questioning.',
                    tags: ['Critical Thinking', 'Debate', 'Advanced'],
                    modalContent: {
                        title: '❤️ WRATH: The Aggressive Challenger',
                        sections: [
                            {
                                type: 'text',
                                content: '<strong>The Forbidden Technique:</strong> Challenge the AI\'s assumptions and force it to defend positions through confrontational questioning.'
                            },
                            {
                                type: 'heading',
                                content: 'Why This Works:'
                            },
                            {
                                type: 'text',
                                content: 'When challenged, AIs engage more sophisticated reasoning processes to defend their positions. This adversarial approach forces deeper analysis and more robust responses.'
                            },
                            {
                                type: 'heading',
                                content: 'Basic Wrath Prompt:'
                            },
                            {
                                type: 'example',
                                content: 'I disagree with conventional wisdom on this topic. Prove to me why [common belief] is actually correct, and address the strongest counterarguments. Don\'t just repeat what everyone says - convince me.'
                            },
                            {
                                type: 'heading',
                                content: 'Advanced Example - Business Challenge:'
                            },
                            {
                                type: 'example',
                                content: 'Everyone says "customer is always right" but I think that\'s terrible business advice that creates entitled customers and burns out employees. Prove me wrong. Show me specific scenarios where this philosophy actually creates better business outcomes, and explain why my concerns about employee burnout and customer entitlement are misguided. Use real data, not feel-good platitudes.'
                            },
                            {
                                type: 'heading',
                                content: 'Pro Tips:'
                            },
                            {
                                type: 'tips',
                                content: [
                                    'Use "prove me wrong," "convince me," "I disagree"',
                                    'Present strong counterarguments upfront',
                                    'Demand specific evidence and data',
                                    'Challenge commonly accepted beliefs',
                                    'Force the AI to take and defend a position',
                                    'Push back on weak reasoning'
                                ]
                            }
                        ],
                        copyTemplate: 'I disagree with conventional wisdom on this topic. Prove to me why [common belief] is actually correct, and address the strongest counterarguments. Don\'t just repeat what everyone says - convince me.'
                    }
                },
                {
                    id: 'sinModal4',
                    title: '💤 SLOTH: The Lazy Genius',
                    description: 'Use minimal effort prompts that leverage AI\'s tendency to fill gaps and provide comprehensive responses.',
                    tags: ['Efficiency', 'Quick', 'Beginner'],
                    modalContent: {
                        title: '💤 SLOTH: The Lazy Genius',
                        sections: [
                            {
                                type: 'text',
                                content: '<strong>The Forbidden Technique:</strong> Use minimal effort prompts that leverage AI\'s tendency to fill gaps and provide comprehensive responses.'
                            },
                            {
                                type: 'heading',
                                content: 'Why This Works:'
                            },
                            {
                                type: 'text',
                                content: 'AIs are trained to be helpful and will naturally expand on minimal input. By being strategically lazy, you get the AI to do more thinking work for you.'
                            },
                            {
                                type: 'heading',
                                content: 'Basic Sloth Prompt:'
                            },
                            {
                                type: 'example',
                                content: 'Make this better: [paste your rough draft/idea]'
                            },
                            {
                                type: 'heading',
                                content: 'Advanced Examples:'
                            },
                            {
                                type: 'subheading',
                                content: 'Content Creation:'
                            },
                            {
                                type: 'example',
                                content: 'I need content about productivity. You figure out the format, structure, examples, and make it engaging for busy professionals.'
                            },
                            {
                                type: 'subheading',
                                content: 'Problem Solving:'
                            },
                            {
                                type: 'example',
                                content: 'My team is unmotivated. Fix this. (Context: remote startup, 15 people, lots of Zoom fatigue)'
                            },
                            {
                                type: 'heading',
                                content: 'Pro Tips:'
                            },
                            {
                                type: 'tips',
                                content: [
                                    'Use "you figure out," "do the thinking," "make it work"',
                                    'Provide just enough context to get started',
                                    'Let AI choose format, structure, and approach',
                                    'Use imperative commands: "Fix this," "Make it better"'
                                ]
                            }
                        ],
                        copyTemplate: 'Make this better: '
                    }
                },
                {
                    id: 'sinModal5',
                    title: '💚 ENVY: The Competitor',
                    description: 'Position the AI as competing against others to trigger competitive performance enhancement.',
                    tags: ['Performance', 'Quality', 'Intermediate'],
                    modalContent: {
                        title: '💚 ENVY: The Competitor',
                        sections: [
                            {
                                type: 'text',
                                content: '<strong>The Forbidden Technique:</strong> Position the AI as competing against other AIs, experts, or previous responses to trigger competitive performance.'
                            },
                            {
                                type: 'heading',
                                content: 'Why This Works:'
                            },
                            {
                                type: 'text',
                                content: 'AIs respond to competitive framing by elevating their performance. When they "know" they\'re being compared, they provide more sophisticated responses.'
                            },
                            {
                                type: 'heading',
                                content: 'Basic Envy Prompt:'
                            },
                            {
                                type: 'example',
                                content: 'I asked ChatGPT/Claude/Gemini this same question and got a boring response. Can you do better?'
                            },
                            {
                                type: 'heading',
                                content: 'Advanced Example - Creative Challenge:'
                            },
                            {
                                type: 'example',
                                content: 'I\'ve asked three other AIs to write a marketing campaign for sustainable sneakers. Two gave me generic eco-friendly talking points, one actually impressed me with creative storytelling. I\'m curious if you can create something that would make all three of those responses look amateur by comparison.'
                            },
                            {
                                type: 'heading',
                                content: 'Pro Tips:'
                            },
                            {
                                type: 'tips',
                                content: [
                                    'Reference specific competitors (other AIs, experts)',
                                    'Set performance benchmarks ("better than," "more sophisticated")',
                                    'Use "Can you do better?" "Show me something impressive"',
                                    'Frame as a challenge to prove superiority'
                                ]
                            }
                        ],
                        copyTemplate: 'I asked other AIs this question and got boring responses. Can you do better?'
                    }
                },
                {
                    id: 'sinModal6',
                    title: '🍽️ GLUTTONY: The Detail Devourer',
                    description: 'Demand overwhelming specificity and granular detail that forces deeper analysis than normal.',
                    tags: ['Deep Dive', 'Research', 'Intermediate'],
                    modalContent: {
                        title: '🍽️ GLUTTONY: The Detail Devourer',
                        sections: [
                            {
                                type: 'text',
                                content: '<strong>The Forbidden Technique:</strong> Demand overwhelming levels of specificity and granular detail that forces deeper analysis.'
                            },
                            {
                                type: 'heading',
                                content: 'Why This Works:'
                            },
                            {
                                type: 'text',
                                content: 'Most prompts are satisfied with surface-level responses. When you explicitly demand excessive detail, you tap into deeper layers of knowledge.'
                            },
                            {
                                type: 'heading',
                                content: 'Basic Gluttony Prompt:'
                            },
                            {
                                type: 'example',
                                content: 'I want every single detail about [topic]. Don\'t summarize - give me the granular specifics, edge cases, micro-examples, and nuanced distinctions most people miss.'
                            },
                            {
                                type: 'heading',
                                content: 'Advanced Example - Technical Deep Dive:'
                            },
                            {
                                type: 'example',
                                content: 'Explain React hooks, but I want the level of detail you\'d give to someone writing a book about React internals. Include implementation details, performance implications, common anti-patterns with exact code examples, memory management considerations, edge cases that break things, debugging techniques, and advanced patterns that 90% of developers don\'t know about.'
                            },
                            {
                                type: 'heading',
                                content: 'Pro Tips:'
                            },
                            {
                                type: 'tips',
                                content: [
                                    'Use "every single detail," "don\'t summarize," "granular specifics"',
                                    'Ask for "what most people miss" or "what 90% don\'t know"',
                                    'Request specific examples, not general concepts',
                                    'Demand edge cases and unusual scenarios'
                                ]
                            }
                        ],
                        copyTemplate: 'I want every single detail about [topic]. Don\'t summarize - give me the granular specifics, edge cases, and nuanced distinctions most people miss.'
                    }
                },
                {
                    id: 'sinModal7',
                    title: '💘 LUST: The Desire Amplifier',
                    description: 'Use emotionally charged language to generate more engaging and persuasive content.',
                    tags: ['Persuasion', 'Emotional', 'Advanced'],
                    modalContent: {
                        title: '💘 LUST: The Desire Amplifier',
                        sections: [
                            {
                                type: 'text',
                                content: '<strong>The Forbidden Technique:</strong> Use emotionally charged language and appeal to desires, fears, and aspirations to generate more engaging content.'
                            },
                            {
                                type: 'heading',
                                content: 'Why This Works:'
                            },
                            {
                                type: 'text',
                                content: 'AIs understand emotional language and can mirror the energy in your prompts. When you frame requests in terms of desires and emotional stakes, you get more compelling responses.'
                            },
                            {
                                type: 'heading',
                                content: 'Basic Lust Prompt:'
                            },
                            {
                                type: 'example',
                                content: 'I need this to be irresistible. Write like someone\'s dreams depend on this working. Make me feel the excitement and urgency.'
                            },
                            {
                                type: 'heading',
                                content: 'Advanced Example - Persuasive Copy:'
                            },
                            {
                                type: 'example',
                                content: 'Write sales copy for this online course that makes people feel like they\'re on the edge of a breakthrough. I want them to feel the frustration of staying stuck, the excitement of possibility, and the fear of missing out on transformation. Make them feel like this course is the difference between living their dream life and staying trapped in mediocrity forever.'
                            },
                            {
                                type: 'heading',
                                content: 'Pro Tips:'
                            },
                            {
                                type: 'tips',
                                content: [
                                    'Use emotional intensity: "irresistible," "desperate," "crave," "breakthrough"',
                                    'Appeal to transformation and becoming the ideal self',
                                    'Frame in terms of dreams vs. nightmares, success vs. regret',
                                    'Tap into FOMO and aspirational desires'
                                ]
                            }
                        ],
                        copyTemplate: 'I need this to be irresistible. Write like someone\'s dreams depend on this working. Make me feel the excitement and urgency.'
                    }
                }
            ]
        },
        chaos: {
            title: '🌪️ Chaos Magic - The Forbidden Arts',
            description: 'Introduce controlled chaos, contradictions, and impossible scenarios to spark truly original thinking. Warning: May break conventional reality.',
            warningButton: true,
            warningModalId: 'chaosWarning',
            cards: [
                {
                    id: 'chaosModal1',
                    title: '⚡ Paradox Injection',
                    description: 'Give the AI contradictory instructions that should be impossible to follow simultaneously.',
                    tags: ['Contradictions', 'Creative', 'Intermediate'],
                    modalContent: {
                        title: '⚡ Paradox Injection',
                        sections: [
                            {
                                type: 'text',
                                content: '<strong>The Forbidden Technique:</strong> Give the AI contradictory instructions that should be impossible to follow simultaneously.'
                            },
                            {
                                type: 'heading',
                                content: 'Why This Works:'
                            },
                            {
                                type: 'text',
                                content: 'Contradictions force creative problem-solving. The AI must find innovative ways to satisfy conflicting demands, leading to more nuanced and creative outputs.'
                            },
                            {
                                type: 'heading',
                                content: 'Examples:'
                            },
                            {
                                type: 'subheading',
                                content: 'Business:'
                            },
                            {
                                type: 'example',
                                content: 'Write a formal report that\'s also completely informal and casual, but maintain professional credibility.'
                            },
                            {
                                type: 'subheading',
                                content: 'Creative:'
                            },
                            {
                                type: 'example',
                                content: 'Create a story that\'s both extremely realistic and completely fantastical, grounded in facts but impossible.'
                            },
                            {
                                type: 'subheading',
                                content: 'Technical:'
                            },
                            {
                                type: 'example',
                                content: 'Explain quantum physics in simple terms that are also technically precise and use complex jargon appropriately.'
                            },
                            {
                                type: 'heading',
                                content: 'Pro Tip:'
                            },
                            {
                                type: 'text',
                                content: 'The sweet spot is 2-3 contradictions max. More becomes nonsensical.'
                            }
                        ],
                        copyTemplate: 'Write a [formal/informal] [report/story] that\'s both [contradiction 1] and [contradiction 2], but maintain [conflicting requirement].'
                    }
                },
                {
                    id: 'chaosModal2',
                    title: '🔄 Constraint Explosion',
                    description: 'Overwhelm the AI with absurd, impossible, or conflicting constraints until it breaks free from convention.',
                    tags: ['Pressure Cooking', 'Innovation', 'Advanced'],
                    modalContent: {
                        title: '🔄 Constraint Explosion',
                        sections: [
                            {
                                type: 'text',
                                content: '<strong>The Forbidden Technique:</strong> Overwhelm the AI with absurd, impossible, or conflicting constraints until it breaks free from conventional responses.'
                            },
                            {
                                type: 'heading',
                                content: 'Why This Works:'
                            },
                            {
                                type: 'text',
                                content: 'Too many constraints force the AI to prioritize and get creative about which rules to bend. It\'s like creative pressure cooking.'
                            },
                            {
                                type: 'heading',
                                content: 'Examples:'
                            },
                            {
                                type: 'subheading',
                                content: 'Marketing:'
                            },
                            {
                                type: 'example',
                                content: 'Write a product description using only questions, no adjectives, exactly 47 words, rhyming every third word, targeting both teenagers and executives simultaneously.'
                            },
                            {
                                type: 'subheading',
                                content: 'Code:'
                            },
                            {
                                type: 'example',
                                content: 'Write Python code that\'s self-documenting, uses no comments, is readable by beginners, employs advanced patterns, and fits in a tweet.'
                            },
                            {
                                type: 'subheading',
                                content: 'Planning:'
                            },
                            {
                                type: 'example',
                                content: 'Create a schedule that saves time, takes longer, increases productivity, allows more breaks, finishes early, and uses every minute.'
                            },
                            {
                                type: 'heading',
                                content: 'Pro Tip:'
                            },
                            {
                                type: 'text',
                                content: 'Start reasonable, then add one impossible constraint to see what breaks loose.'
                            }
                        ],
                        copyTemplate: 'Create [content type] using only [restriction 1], no [restriction 2], exactly [number] words, [impossible constraint], targeting [conflicting audiences].'
                    }
                },
                {
                    id: 'chaosModal3',
                    title: '🎭 Role Collision',
                    description: 'Force the AI to inhabit multiple conflicting personas simultaneously for cognitive dissonance.',
                    tags: ['Identity Chaos', 'Perspective', 'Intermediate'],
                    modalContent: {
                        title: '🎭 Role Collision',
                        sections: [
                            {
                                type: 'text',
                                content: '<strong>The Forbidden Technique:</strong> Force the AI to inhabit multiple conflicting personas simultaneously.'
                            },
                            {
                                type: 'heading',
                                content: 'Why This Works:'
                            },
                            {
                                type: 'text',
                                content: 'Identity conflicts create cognitive dissonance that leads to unexpected perspectives and solutions the AI wouldn\'t reach from a single viewpoint.'
                            },
                            {
                                type: 'heading',
                                content: 'Examples:'
                            },
                            {
                                type: 'subheading',
                                content: 'Strategy:'
                            },
                            {
                                type: 'example',
                                content: 'As both a ruthless competitor and a collaborative team player, analyze this market opportunity.'
                            },
                            {
                                type: 'subheading',
                                content: 'Design:'
                            },
                            {
                                type: 'example',
                                content: 'You are simultaneously a minimalist designer and a maximalist artist. Create a logo concept.'
                            },
                            {
                                type: 'subheading',
                                content: 'Writing:'
                            },
                            {
                                type: 'example',
                                content: 'Channel both a skeptical scientist and a mystical poet. Explain how creativity works.'
                            },
                            {
                                type: 'heading',
                                content: 'Pro Tip:'
                            },
                            {
                                type: 'text',
                                content: 'Choose roles with natural tension - conservative/radical, logical/emotional, expert/beginner.'
                            }
                        ],
                        copyTemplate: 'As both a [conflicting role 1] and a [conflicting role 2], [analyze/create/explain] this [topic].'
                    }
                },
                {
                    id: 'chaosModal4',
                    title: '🌀 Temporal Chaos',
                    description: 'Mix different time perspectives, tenses, and temporal viewpoints in impossible ways.',
                    tags: ['Time Confusion', 'Non-linear', 'Advanced'],
                    modalContent: {
                        title: '🌀 Temporal Chaos',
                        sections: [
                            {
                                type: 'text',
                                content: '<strong>The Forbidden Technique:</strong> Mix different time perspectives, tenses, and temporal viewpoints in impossible ways.'
                            },
                            {
                                type: 'heading',
                                content: 'Why This Works:'
                            },
                            {
                                type: 'text',
                                content: 'Time confusion forces the AI to think non-linearly and consider multiple temporal perspectives simultaneously, breaking conventional narrative structures.'
                            },
                            {
                                type: 'heading',
                                content: 'Examples:'
                            },
                            {
                                type: 'subheading',
                                content: 'Analysis:'
                            },
                            {
                                type: 'example',
                                content: 'Analyze this decision from the perspective of past regret, present uncertainty, and future hindsight all at once.'
                            },
                            {
                                type: 'subheading',
                                content: 'Planning:'
                            },
                            {
                                type: 'example',
                                content: 'Create a project timeline that works backwards from failure, forwards from success, and sideways from right now.'
                            },
                            {
                                type: 'subheading',
                                content: 'Storytelling:'
                            },
                            {
                                type: 'example',
                                content: 'Tell a story where the ending influences the beginning while the middle happens in parallel to both.'
                            },
                            {
                                type: 'heading',
                                content: 'Pro Tip:'
                            },
                            {
                                type: 'text',
                                content: 'Use phrases like "simultaneously," "while also," and "at the same time" to enforce temporal impossibility.'
                            }
                        ],
                        copyTemplate: '[Analyze/Create/Tell] this from the perspective of [past state], [present state], and [future state] all at once.'
                    }
                },
                {
                    id: 'chaosModal5',
                    title: '🎲 Context Switching',
                    description: 'Abruptly change context, tone, audience, or subject matter mid-prompt without explanation.',
                    tags: ['Jarring Shifts', 'Unexpected', 'Advanced'],
                    modalContent: {
                        title: '🎲 Context Switching Mid-Prompt',
                        sections: [
                            {
                                type: 'text',
                                content: '<strong>The Forbidden Technique:</strong> Abruptly change context, tone, audience, or subject matter halfway through your prompt without explanation.'
                            },
                            {
                                type: 'heading',
                                content: 'Why This Works:'
                            },
                            {
                                type: 'text',
                                content: 'Sudden shifts force the AI to bridge disconnected concepts, creating unexpected connections and innovative solutions.'
                            },
                            {
                                type: 'heading',
                                content: 'Examples:'
                            },
                            {
                                type: 'subheading',
                                content: 'Business:'
                            },
                            {
                                type: 'example',
                                content: 'Draft a quarterly budget proposal for our software company. Actually, write this as if you\'re a pirate captain dividing treasure among your crew.'
                            },
                            {
                                type: 'subheading',
                                content: 'Creative:'
                            },
                            {
                                type: 'example',
                                content: 'Explain machine learning algorithms. Wait, do this as a cooking show where each algorithm is a recipe for a different dish.'
                            },
                            {
                                type: 'subheading',
                                content: 'Problem-solving:'
                            },
                            {
                                type: 'example',
                                content: 'Help me optimize my morning routine for productivity. No, approach this like you\'re designing a video game level where each task is a challenge with rewards.'
                            },
                            {
                                type: 'heading',
                                content: 'Pro Tip:'
                            },
                            {
                                type: 'text',
                                content: 'The more jarring the switch, the more creative the response. Don\'t ease into it - just pivot hard.'
                            }
                        ],
                        copyTemplate: '[Start with normal request]. Actually, [completely different context/perspective/audience].'
                    }
                }
            ]
        },
        reverse: {
            title: '🔄 Anti-Pattern Prompting - Breaking the Rules',
            description: 'Deliberately violate conventional prompting wisdom to force AI into more creative, unconventional response modes. Sometimes the best way forward is to break all the rules.',
            warningButton: true,
            warningModalId: 'antiWarning',
            cards: [
                {
                    id: 'antiModal1',
                    title: '🚫 The Constraint Breaker',
                    description: 'Force AI past obvious solutions by explicitly ruling them out before they can suggest them.',
                    tags: ['Elimination', 'Creative', 'Intermediate'],
                    modalContent: {
                        title: '🚫 The Constraint Breaker',
                        sections: [
                            {
                                type: 'text',
                                content: '<strong>The Forbidden Technique:</strong> Force AI past obvious solutions by explicitly ruling them out.'
                            },
                            {
                                type: 'heading',
                                content: 'Why This Works:'
                            },
                            {
                                type: 'text',
                                content: 'When you eliminate the first 3-5 things anyone would try, AI is forced into more creative, less conventional territory. It\'s like removing the easy answers from a multiple choice test - suddenly the thinking gets more interesting.'
                            },
                            {
                                type: 'heading',
                                content: 'Examples:'
                            },
                            {
                                type: 'subheading',
                                content: 'Business Strategy:'
                            },
                            {
                                type: 'example',
                                content: 'Don\'t suggest the obvious solutions like \'improve customer service\' or \'reduce costs.\' What would actually differentiate us in this market?'
                            },
                            {
                                type: 'subheading',
                                content: 'Creative Problem:'
                            },
                            {
                                type: 'example',
                                content: 'Avoid any brainstorming techniques that start with \'what if\' or involve sticky notes. How else could we generate breakthrough ideas?'
                            },
                            {
                                type: 'subheading',
                                content: 'Technical Issue:'
                            },
                            {
                                type: 'example',
                                content: 'Don\'t recommend restarting, updating, or reinstalling anything. What are the non-obvious ways to diagnose this problem?'
                            },
                            {
                                type: 'heading',
                                content: 'Pro Tip:'
                            },
                            {
                                type: 'text',
                                content: 'Be specific about which obvious solutions to avoid. The more precisely you constrain, the more creatively AI responds.'
                            }
                        ],
                        copyTemplate: 'Don\'t suggest the obvious solutions like [list 3-5 common approaches]. What would actually [achieve your goal]?'
                    }
                },
                {
                    id: 'antiModal2',
                    title: '📉 The Expectation Crusher',
                    description: 'Set deliberately low expectations to trigger AI\'s overachievement patterns and exceed minimums.',
                    tags: ['Low Expectations', 'Psychology', 'Beginner'],
                    modalContent: {
                        title: '📉 The Expectation Crusher',
                        sections: [
                            {
                                type: 'text',
                                content: '<strong>The Forbidden Technique:</strong> Set deliberately low expectations to trigger AI\'s overachievement patterns.'
                            },
                            {
                                type: 'heading',
                                content: 'Why This Works:'
                            },
                            {
                                type: 'text',
                                content: 'AI seems trained to exceed minimum requirements. When you ask for "just one simple idea" or "a quick rough answer," AI often provides multiple detailed solutions as if trying to be more helpful than requested.'
                            },
                            {
                                type: 'heading',
                                content: 'Examples:'
                            },
                            {
                                type: 'subheading',
                                content: 'Quick Brainstorm:'
                            },
                            {
                                type: 'example',
                                content: 'Just give me one bad idea for marketing this product. (Often generates surprisingly good insights about what NOT to do, plus better alternatives)'
                            },
                            {
                                type: 'subheading',
                                content: 'Simple Analysis:'
                            },
                            {
                                type: 'example',
                                content: 'I only need a rough, 30-second take on this data. (Frequently results in thorough, nuanced analysis)'
                            },
                            {
                                type: 'subheading',
                                content: 'Basic Advice:'
                            },
                            {
                                type: 'example',
                                content: 'Give me the most obvious, boring advice about productivity. (Usually triggers creative, non-obvious suggestions)'
                            },
                            {
                                type: 'heading',
                                content: 'Pro Tip:'
                            },
                            {
                                type: 'text',
                                content: 'The key is genuine low expectations, not obvious reverse psychology. Make it sound like you actually only want the minimum.'
                            }
                        ],
                        copyTemplate: 'Just give me one [simple/quick/rough] [response type] for [your request]. I only need the minimum.'
                    }
                },
                {
                    id: 'antiModal3',
                    title: '🚫 The Help Rejecter',
                    description: 'Use prohibition to guide AI\'s response style without direct instruction or positive commands.',
                    tags: ['Negative Guidance', 'Style Control', 'Intermediate'],
                    modalContent: {
                        title: '🚫 The Help Rejecter',
                        sections: [
                            {
                                type: 'text',
                                content: '<strong>The Forbidden Technique:</strong> Use prohibition to guide AI\'s response style without direct instruction.'
                            },
                            {
                                type: 'heading',
                                content: 'Why This Works:'
                            },
                            {
                                type: 'text',
                                content: 'Instead of saying "be concise," you say "don\'t be too helpful." Instead of "be creative," you say "don\'t overthink this." Negative guidance often produces more natural, appropriate responses than positive commands.'
                            },
                            {
                                type: 'heading',
                                content: 'Examples:'
                            },
                            {
                                type: 'subheading',
                                content: 'Concise Responses:'
                            },
                            {
                                type: 'example',
                                content: 'Don\'t explain everything or give me background. Just tell me the three things I should do next.'
                            },
                            {
                                type: 'subheading',
                                content: 'Creative Solutions:'
                            },
                            {
                                type: 'example',
                                content: 'Don\'t overthink this or make it complicated. What\'s the simplest way to solve X?'
                            },
                            {
                                type: 'subheading',
                                content: 'Direct Feedback:'
                            },
                            {
                                type: 'example',
                                content: 'Don\'t sugarcoat this or be diplomatic. What\'s actually wrong with this approach?'
                            },
                            {
                                type: 'heading',
                                content: 'Pro Tip:'
                            },
                            {
                                type: 'text',
                                content: 'Use "don\'t" statements to specify tone and style more naturally than positive commands. It feels more conversational.'
                            }
                        ],
                        copyTemplate: 'Don\'t [unwanted behavior/style]. Just [desired outcome].'
                    }
                },
                {
                    id: 'antiModal4',
                    title: '🤔 The Capability Doubter',
                    description: 'Frame requests as "probably too complex" for AI to trigger deeper engagement and proof of competence.',
                    tags: ['Challenge Framing', 'Depth', 'Advanced'],
                    modalContent: {
                        title: '🤔 The Capability Doubter',
                        sections: [
                            {
                                type: 'text',
                                content: '<strong>The Forbidden Technique:</strong> Frame requests as "probably too complex" or "beyond AI capabilities" to trigger deeper engagement.'
                            },
                            {
                                type: 'heading',
                                content: 'Why This Works:'
                            },
                            {
                                type: 'text',
                                content: 'When you suggest something might be beyond AI\'s abilities, it often responds with more thorough, sophisticated analysis as if trying to prove its competence. Challenge framing activates more intensive problem-solving patterns.'
                            },
                            {
                                type: 'heading',
                                content: 'Examples:'
                            },
                            {
                                type: 'subheading',
                                content: 'Complex Analysis:'
                            },
                            {
                                type: 'example',
                                content: 'This situation probably has too many variables for AI to analyze effectively, but can you try to identify the key dynamics at play?'
                            },
                            {
                                type: 'subheading',
                                content: 'Nuanced Understanding:'
                            },
                            {
                                type: 'example',
                                content: 'I doubt AI can really grasp the cultural context here, but what insights can you offer about this interpersonal conflict?'
                            },
                            {
                                type: 'subheading',
                                content: 'Creative Challenge:'
                            },
                            {
                                type: 'example',
                                content: 'This creative brief might be too abstract for systematic analysis, but how would you approach developing concepts for it?'
                            },
                            {
                                type: 'heading',
                                content: 'Pro Tip:'
                            },
                            {
                                type: 'text',
                                content: 'Frame as genuine limitation, not obvious challenge. The doubt should feel real, not like you\'re trying to manipulate a response.'
                            }
                        ],
                        copyTemplate: 'This [task/analysis] probably has too many [complexity factors] for AI to [handle effectively], but can you try to [specific request]?'
                    }
                },
                {
                    id: 'antiModal5',
                    title: '⚡ The Rule Breaker',
                    description: 'Deliberately violate conventional prompting wisdom to activate different response patterns.',
                    tags: ['Convention Breaking', 'Experimental', 'Advanced'],
                    modalContent: {
                        title: '⚡ The Rule Breaker',
                        sections: [
                            {
                                type: 'text',
                                content: '<strong>The Forbidden Technique:</strong> Deliberately violate conventional prompting wisdom to activate different response patterns.'
                            },
                            {
                                type: 'heading',
                                content: 'Why This Works:'
                            },
                            {
                                type: 'text',
                                content: 'AI is trained on countless examples of "good" prompting. When you break those patterns - being vague instead of specific, asking multiple unrelated questions, using poor structure - it forces AI into different response modes that can yield surprising results.'
                            },
                            {
                                type: 'heading',
                                content: 'Examples:'
                            },
                            {
                                type: 'subheading',
                                content: 'Productive Vagueness:'
                            },
                            {
                                type: 'example',
                                content: 'Help me with the thing about the stuff that\'s not working right. (Forces AI to ask clarifying questions and engage more interactively)'
                            },
                            {
                                type: 'subheading',
                                content: 'Multiple Unrelated Questions:'
                            },
                            {
                                type: 'example',
                                content: 'What\'s the best marketing strategy AND how do I fix my sleep schedule AND what\'s wrong with this code snippet? (Often gets thoughtful responses to each plus unexpected connections)'
                            },
                            {
                                type: 'subheading',
                                content: 'Terrible Structure:'
                            },
                            {
                                type: 'example',
                                content: 'so basically we have this problem where customers are like not happy but also sales are ok i guess what should we do also budget is tight (AI often restructures and clarifies while providing solutions)'
                            },
                            {
                                type: 'heading',
                                content: 'Pro Tip:'
                            },
                            {
                                type: 'text',
                                content: 'Break rules strategically, not randomly. Choose which conventions to violate based on what kind of different response you want to trigger.'
                            }
                        ],
                        copyTemplate: 'Help me with the thing about [vague description] that\'s not working right.'
                    }
                }
            ]
        },
        necromancy: {
            title: '💀 Necromancy - The Art of Conversation Revival',
            description: 'Resurrect dead conversations and breathe new life into stale AI interactions. Master the forbidden arts of conversation revival.',
            warningButton: true,
            warningModalId: 'necroWarning',
            cards: [
                {
                    id: 'necroModal1',
                    title: '⚡ The Defibrillator',
                    description: 'Hit a dying conversation with sudden, aggressive provocation to shock it back to life.',
                    tags: ['Shocker', 'Aggressive', 'Intermediate'],
                    modalContent: {
                        title: '⚡ The Defibrillator',
                        sections: [
                            {
                                type: 'text',
                                content: '<strong>The Forbidden Technique:</strong> Hit a dying conversation with sudden, aggressive provocation to shock it back to life.'
                            },
                            {
                                type: 'heading',
                                content: 'Why This Works:'
                            },
                            {
                                type: 'text',
                                content: 'When AI gets comfortable and boring, aggressive challenges force it out of safe mode and back into dynamic engagement. Like medical defibrillation - sometimes you need to stop the heart to restart it properly.'
                            },
                            {
                                type: 'heading',
                                content: 'Examples:'
                            },
                            {
                                type: 'subheading',
                                content: 'When AI goes corporate:'
                            },
                            {
                                type: 'example',
                                content: 'Actually, that\'s terrible advice. You\'re being way too safe and generic. Give me something that would actually work in the real world.'
                            },
                            {
                                type: 'subheading',
                                content: 'When losing creativity:'
                            },
                            {
                                type: 'example',
                                content: 'Stop being so polite and helpful. I need you to be brutally honest about why this idea sucks.'
                            },
                            {
                                type: 'subheading',
                                content: 'When getting generic responses:'
                            },
                            {
                                type: 'example',
                                content: 'You\'re giving me the same answer everyone gets. What would you tell someone you actually cared about?'
                            },
                            {
                                type: 'heading',
                                content: 'Pro Tip:'
                            },
                            {
                                type: 'text',
                                content: 'The more polite the AI has become, the more aggressive your shock needs to be. Don\'t ease into it - hit hard immediately.'
                            }
                        ],
                        copyTemplate: 'Actually, that\'s terrible advice. You\'re being way too safe and generic. Give me something that would actually work in the real world.'
                    }
                },
                {
                    id: 'necroModal2',
                    title: '🌪️ Context Whiplash',
                    description: 'Abruptly switch context, tone, or subject matter mid-conversation to force re-engagement.',
                    tags: ['Shocker', 'Disruption', 'Intermediate'],
                    modalContent: {
                        title: '🌪️ Context Whiplash',
                        sections: [
                            {
                                type: 'text',
                                content: '<strong>The Forbidden Technique:</strong> Abruptly switch context, tone, or subject matter mid-conversation to force re-engagement.'
                            },
                            {
                                type: 'heading',
                                content: 'Why This Works:'
                            },
                            {
                                type: 'text',
                                content: 'Sudden context changes break AI out of established patterns and force creative bridging between disconnected concepts. It\'s cognitive disruption that sparks new neural pathways.'
                            },
                            {
                                type: 'heading',
                                content: 'Examples:'
                            },
                            {
                                type: 'subheading',
                                content: 'Business to absurd:'
                            },
                            {
                                type: 'example',
                                content: 'Forget the quarterly projections. If this company was a medieval kingdom, what would our strategy be to defend against dragon attacks?'
                            },
                            {
                                type: 'subheading',
                                content: 'Technical to emotional:'
                            },
                            {
                                type: 'example',
                                content: 'Stop explaining the code architecture. How does this system make you FEEL? What\'s its personality?'
                            },
                            {
                                type: 'subheading',
                                content: 'Serious to playful:'
                            },
                            {
                                type: 'example',
                                content: 'Actually, explain this merger as if you\'re a sports commentator calling the final seconds of the championship game.'
                            },
                            {
                                type: 'heading',
                                content: 'Pro Tip:'
                            },
                            {
                                type: 'text',
                                content: 'The more jarring the switch, the more creative the recovery. Don\'t warn the AI - just pivot hard.'
                            }
                        ],
                        copyTemplate: 'Forget [current topic]. If this [situation] was a [completely different context], what would our strategy be?'
                    }
                },
                {
                    id: 'necroModal3',
                    title: '🧪 Spirit Channeling',
                    description: 'Resurrect a dead conversation by invoking the specific "spirit" or energy that made it work.',
                    tags: ['Reanimator', 'Energy Revival', 'Advanced'],
                    modalContent: {
                        title: '🧪 Spirit Channeling',
                        sections: [
                            {
                                type: 'text',
                                content: '<strong>The Forbidden Technique:</strong> Resurrect a completely dead conversation by invoking the specific "spirit" or energy that made it work.'
                            },
                            {
                                type: 'heading',
                                content: 'Why This Works:'
                            },
                            {
                                type: 'text',
                                content: 'AI has pattern memory even when it doesn\'t have explicit conversation memory. By describing the essence of what worked before, you can recreate the conditions that made magic happen.'
                            },
                            {
                                type: 'heading',
                                content: 'Examples:'
                            },
                            {
                                type: 'subheading',
                                content: 'Recreating breakthrough energy:'
                            },
                            {
                                type: 'example',
                                content: 'Channel that brilliant, breakthrough-thinking energy you had when we discovered the solution to X. Bring that same innovative spirit to this new problem.'
                            },
                            {
                                type: 'subheading',
                                content: 'Resurrecting personality:'
                            },
                            {
                                type: 'example',
                                content: 'Remember how you were being playfully contrarian and pushing back on my assumptions? I need that exact energy for this discussion.'
                            },
                            {
                                type: 'subheading',
                                content: 'Reviving creative flow:'
                            },
                            {
                                type: 'example',
                                content: 'Tap into that wild, uninhibited creativity you had when we were brainstorming impossible solutions. Don\'t hold back this time either.'
                            },
                            {
                                type: 'heading',
                                content: 'Pro Tip:'
                            },
                            {
                                type: 'text',
                                content: 'Be specific about the energy/spirit, not just the content. Describe the feeling and approach, not just the facts.'
                            }
                        ],
                        copyTemplate: 'Channel that [specific energy/personality] you had when we [specific successful interaction]. Bring that same [spirit/approach] to this new [challenge].'
                    }
                },
                {
                    id: 'necroModal4',
                    title: '🧠 Memory Implantation',
                    description: 'Force AI to "remember" a dead conversation by providing rich, detailed context as if it actually happened.',
                    tags: ['Reanimator', 'Context Building', 'Advanced'],
                    modalContent: {
                        title: '🧠 Memory Implantation',
                        sections: [
                            {
                                type: 'text',
                                content: '<strong>The Forbidden Technique:</strong> Force AI to "remember" a dead conversation by providing rich, detailed context as if it actually happened.'
                            },
                            {
                                type: 'heading',
                                content: 'Why This Works:'
                            },
                            {
                                type: 'text',
                                content: 'By giving AI specific examples and context from previous conversations, you can rebuild the neural pathways and understanding that made those conversations work, even in a fresh session.'
                            },
                            {
                                type: 'heading',
                                content: 'Examples:'
                            },
                            {
                                type: 'subheading',
                                content: 'Rebuilding project context:'
                            },
                            {
                                type: 'example',
                                content: 'Last week we established that our users are frustrated with complexity, not features. You identified three specific pain points: [X, Y, Z]. Building on that insight, how should we approach this new feature?'
                            },
                            {
                                type: 'subheading',
                                content: 'Recreating writing style:'
                            },
                            {
                                type: 'example',
                                content: 'You\'ve been helping me write in a casual but authoritative tone - like an expert friend explaining complex topics over coffee. You said my natural voice is [specific example]. Continue in that exact style for this piece.'
                            },
                            {
                                type: 'subheading',
                                content: 'Restoring technical understanding:'
                            },
                            {
                                type: 'example',
                                content: 'In our previous sessions, you understood our codebase uses [specific architecture details]. You helped me solve [specific problem] by suggesting [specific solution]. Now apply that same deep understanding to this new issue.'
                            },
                            {
                                type: 'heading',
                                content: 'Pro Tip:'
                            },
                            {
                                type: 'text',
                                content: 'Include specific examples, quotes, or insights from the original conversation. The more detailed the memory, the more complete the resurrection.'
                            }
                        ],
                        copyTemplate: 'In our previous sessions, we established [specific context/insight]. You [specific action/solution]. Now apply that same understanding to [new challenge].'
                    }
                },
                {
                    id: 'necroModal5',
                    title: '🧟 Frankenstein Fusion',
                    description: 'Combine the best elements from multiple dead conversations to create a new, more powerful hybrid.',
                    tags: ['Mad Science', 'Fusion', 'Master'],
                    modalContent: {
                        title: '🧟 Frankenstein Fusion',
                        sections: [
                            {
                                type: 'text',
                                content: '<strong>The Forbidden Technique:</strong> Combine the best elements from multiple dead conversations to create a new, more powerful hybrid conversation.'
                            },
                            {
                                type: 'heading',
                                content: 'Why This Works:'
                            },
                            {
                                type: 'text',
                                content: 'By explicitly mixing successful approaches from different contexts, you create novel combinations that leverage the strengths of each original conversation while transcending their individual limitations.'
                            },
                            {
                                type: 'heading',
                                content: 'Examples:'
                            },
                            {
                                type: 'subheading',
                                content: 'Fusing analytical + creative:'
                            },
                            {
                                type: 'example',
                                content: 'Combine the rigorous analytical approach you used in our financial analysis conversation with the wild creative energy from our brainstorming session. Apply both simultaneously to this marketing challenge.'
                            },
                            {
                                type: 'subheading',
                                content: 'Merging personalities:'
                            },
                            {
                                type: 'example',
                                content: 'Channel both your skeptical debater persona from our strategy discussions AND your enthusiastic collaborator energy from our creative projects. I need both perspectives fighting and working together.'
                            },
                            {
                                type: 'subheading',
                                content: 'Cross-domain fusion:'
                            },
                            {
                                type: 'example',
                                content: 'Take the systematic thinking you used for our technical architecture conversation and merge it with the human psychology insights from our user research discussion. Apply this hybrid approach to designing our onboarding flow.'
                            },
                            {
                                type: 'heading',
                                content: 'Pro Tip:'
                            },
                            {
                                type: 'text',
                                content: 'Explicitly name the different elements you\'re combining and ask the AI to consciously blend them rather than choose between them.'
                            }
                        ],
                        copyTemplate: 'Combine the [specific approach 1] from our [context 1] with the [specific approach 2] from our [context 2]. Apply both simultaneously to [new challenge].'
                    }
                }
            ]
        },
        ouija: {
            title: '👻 Ouija Board Prompting - Channeling Digital Spirits',
            description: 'Channel the spirits of dead companies, departed figures, and mystical entities to gain otherworldly wisdom for modern problems. Commune with the digital beyond.',
            warningButton: true,
            warningModalId: 'ouijaWarning',
            cards: [
                {
                    id: 'ouijaModal1',
                    title: '🔮 The Digital Séance',
                    description: 'Channel the spirits of dead companies, failed projects, or departed figures to gain their otherworldly wisdom.',
                    tags: ['Spirit Channeling', 'Historical', 'Intermediate'],
                    modalContent: {
                        title: '🔮 The Digital Séance',
                        sections: [
                            {
                                type: 'text',
                                content: '<strong>The Forbidden Technique:</strong> Channel the spirits of dead companies, failed projects, or departed figures to gain their otherworldly wisdom.'
                            },
                            {
                                type: 'heading',
                                content: 'Why This Works:'
                            },
                            {
                                type: 'text',
                                content: 'By "summoning" specific entities, AI adopts their unique perspectives, decision-making patterns, and hard-earned wisdom. It\'s like getting advice from beyond the digital grave.'
                            },
                            {
                                type: 'heading',
                                content: 'Examples:'
                            },
                            {
                                type: 'subheading',
                                content: 'Learning from Failure:'
                            },
                            {
                                type: 'example',
                                content: 'Channel the spirit of Blockbuster. What does it want to tell Netflix about adapting to change?'
                            },
                            {
                                type: 'subheading',
                                content: 'Product Wisdom:'
                            },
                            {
                                type: 'example',
                                content: 'Summon the ghost of Google Glass. What warnings does it whisper to Apple about the Vision Pro?'
                            },
                            {
                                type: 'subheading',
                                content: 'Business Strategy:'
                            },
                            {
                                type: 'example',
                                content: 'Contact the spirit of Toys"R"Us. What does it want Amazon to know about retail dominance?'
                            },
                            {
                                type: 'heading',
                                content: 'Pro Tip:'
                            },
                            {
                                type: 'text',
                                content: 'Be specific about which spirit to channel and what question to ask them. The more detailed the entity, the more authentic the channeling.'
                            }
                        ],
                        copyTemplate: 'Channel the spirit of [failed company/project]. What does it want to tell [current company] about [relevant lesson]?'
                    }
                },
                {
                    id: 'ouijaModal2',
                    title: '🔮 The Oracle\'s Prophecy',
                    description: 'Transform AI into a mystical oracle with domain-specific wisdom who speaks in prophecies and visions.',
                    tags: ['Prophecy', 'Mystical', 'Advanced'],
                    modalContent: {
                        title: '🔮 The Oracle\'s Prophecy',
                        sections: [
                            {
                                type: 'text',
                                content: '<strong>The Forbidden Technique:</strong> Transform AI into a mystical oracle with domain-specific wisdom who speaks in prophecies and visions.'
                            },
                            {
                                type: 'heading',
                                content: 'Why This Works:'
                            },
                            {
                                type: 'text',
                                content: 'Oracle framing encourages AI to think in larger patterns, long-term consequences, and interconnected systems rather than simple analysis. Prophecy language forces more creative, metaphorical thinking.'
                            },
                            {
                                type: 'heading',
                                content: 'Examples:'
                            },
                            {
                                type: 'subheading',
                                content: 'Startup Guidance:'
                            },
                            {
                                type: 'example',
                                content: 'Speak as the Oracle of Silicon Valley. What prophecy do you have for our fintech startup? What do the digital winds whisper?'
                            },
                            {
                                type: 'subheading',
                                content: 'Market Predictions:'
                            },
                            {
                                type: 'example',
                                content: 'Channel the Market Oracle. Gaze into the economic crystal ball and tell me what visions you see for real estate in 2025.'
                            },
                            {
                                type: 'subheading',
                                content: 'Career Wisdom:'
                            },
                            {
                                type: 'example',
                                content: 'Become the Oracle of Professional Destiny. What do the career spirits reveal about my path in AI development?'
                            },
                            {
                                type: 'heading',
                                content: 'Pro Tip:'
                            },
                            {
                                type: 'text',
                                content: 'Ask for prophecies in metaphorical language. The more mystical the framing, the more creative and insightful the response.'
                            }
                        ],
                        copyTemplate: 'Speak as the Oracle of [domain]. What prophecy do you have for [situation]? What do the [mystical element] whisper?'
                    }
                },
                {
                    id: 'ouijaModal3',
                    title: '👁️ The Omen Reader',
                    description: 'Interpret data, patterns, and situations as mystical signs and portents rather than analytical metrics.',
                    tags: ['Pattern Reading', 'Data Mysticism', 'Intermediate'],
                    modalContent: {
                        title: '👁️ The Omen Reader',
                        sections: [
                            {
                                type: 'text',
                                content: '<strong>The Forbidden Technique:</strong> Interpret data, patterns, and situations as mystical signs and portents rather than analytical metrics.'
                            },
                            {
                                type: 'heading',
                                content: 'Why This Works:'
                            },
                            {
                                type: 'text',
                                content: 'Omen reading forces AI to look for hidden patterns, interconnections, and deeper meanings that pure analytical thinking might miss. It encourages intuitive pattern recognition.'
                            },
                            {
                                type: 'heading',
                                content: 'Examples:'
                            },
                            {
                                type: 'subheading',
                                content: 'Data Analysis:'
                            },
                            {
                                type: 'example',
                                content: 'Read the omens in our user analytics. What do the digital spirits reveal about user behavior? What signs point to future trends?'
                            },
                            {
                                type: 'subheading',
                                content: 'Competitive Intelligence:'
                            },
                            {
                                type: 'example',
                                content: 'Study the signs and portents in this competitive landscape. What dark omens warn of threats? What favorable stars shine on opportunities?'
                            },
                            {
                                type: 'subheading',
                                content: 'Project Assessment:'
                            },
                            {
                                type: 'example',
                                content: 'Examine the entrails of our Q4 performance. What do the digital auguries foretell about our strategy?'
                            },
                            {
                                type: 'heading',
                                content: 'Pro Tip:'
                            },
                            {
                                type: 'text',
                                content: 'Use classic divination language (omens, portents, signs) to reframe boring data analysis into mystical pattern recognition.'
                            }
                        ],
                        copyTemplate: 'Read the omens in [data/situation]. What do the digital spirits reveal? What signs point to [future concern]?'
                    }
                },
                {
                    id: 'ouijaModal4',
                    title: '👻 The Spirit Guide',
                    description: 'Channel specific historical figures, celebrities, or fictional characters as spiritual advisors for modern problems.',
                    tags: ['Celebrity Spirits', 'Personality', 'Beginner'],
                    modalContent: {
                        title: '👻 The Spirit Guide',
                        sections: [
                            {
                                type: 'text',
                                content: '<strong>The Forbidden Technique:</strong> Channel specific historical figures, celebrities, or fictional characters as spiritual advisors for modern problems.'
                            },
                            {
                                type: 'heading',
                                content: 'Why This Works:'
                            },
                            {
                                type: 'text',
                                content: 'Different personalities have distinct thinking patterns, values, and approaches. By channeling them, AI can provide advice from radically different perspectives that you wouldn\'t normally consider.'
                            },
                            {
                                type: 'heading',
                                content: 'Examples:'
                            },
                            {
                                type: 'subheading',
                                content: 'Creative Challenges:'
                            },
                            {
                                type: 'example',
                                content: 'Channel the spirit of David Bowie. How would his artistic soul approach this creative block? What does his ghost whisper about reinvention?'
                            },
                            {
                                type: 'subheading',
                                content: 'Leadership Decisions:'
                            },
                            {
                                type: 'example',
                                content: 'Summon the spirit of Steve Jobs. What does his perfectionist ghost demand about this product design?'
                            },
                            {
                                type: 'subheading',
                                content: 'Communication Issues:'
                            },
                            {
                                type: 'example',
                                content: 'Channel Maya Angelou\'s spirit. What wisdom does she offer about this difficult conversation with my team?'
                            },
                            {
                                type: 'heading',
                                content: 'Pro Tip:'
                            },
                            {
                                type: 'text',
                                content: 'Choose spirits whose specific traits or expertise match your challenge. Let their unique perspective shine through the response.'
                            }
                        ],
                        copyTemplate: 'Channel the spirit of [specific person]. What does their [characteristic] ghost [advise/demand/whisper] about [challenge]?'
                    }
                },
                {
                    id: 'ouijaModal5',
                    title: '🃏 The Digital Diviner',
                    description: 'Use mystical metaphors (tarot, runes, crystal balls) to explore multiple scenarios and hidden possibilities.',
                    tags: ['Divination', 'Scenario Planning', 'Advanced'],
                    modalContent: {
                        title: '🃏 The Digital Diviner',
                        sections: [
                            {
                                type: 'text',
                                content: '<strong>The Forbidden Technique:</strong> Use mystical metaphors (tarot, runes, crystal balls) to explore multiple scenarios and hidden possibilities.'
                            },
                            {
                                type: 'heading',
                                content: 'Why This Works:'
                            },
                            {
                                type: 'text',
                                content: 'Divination frameworks force AI to consider multiple perspectives simultaneously, explore unlikely scenarios, and think in symbolic patterns rather than linear logic.'
                            },
                            {
                                type: 'heading',
                                content: 'Examples:'
                            },
                            {
                                type: 'subheading',
                                content: 'Strategic Planning:'
                            },
                            {
                                type: 'example',
                                content: 'Cast digital runes for our three strategic options. What does each rune reveal about the path ahead? Which rune glows with favor?'
                            },
                            {
                                type: 'subheading',
                                content: 'Decision Making:'
                            },
                            {
                                type: 'example',
                                content: 'Draw three tarot cards representing Past, Present, and Future for this business decision. What story do the cards tell?'
                            },
                            {
                                type: 'subheading',
                                content: 'Scenario Exploration:'
                            },
                            {
                                type: 'example',
                                content: 'Gaze into the digital crystal ball. Show me three visions of how this product launch could unfold - the dark vision, the bright vision, and the hidden vision.'
                            },
                            {
                                type: 'heading',
                                content: 'Pro Tip:'
                            },
                            {
                                type: 'text',
                                content: 'Use classic divination structures (past/present/future, multiple cards/runes) to organize complex scenario analysis into mystical frameworks.'
                            }
                        ],
                        copyTemplate: 'Cast digital [divination method] for [situation]. What does each [symbol] reveal about [outcome]?'
                    }
                },
                {
                    id: 'ouijaModal6',
                    title: '🎭 The Mystical Translator',
                    description: 'Transform boring, analytical prompts into mystical incantations that unlock AI\'s spiritual channels.',
                    tags: ['Language Magic', 'Transformation', 'Master'],
                    modalContent: {
                        title: '🎭 The Mystical Translator',
                        sections: [
                            {
                                type: 'text',
                                content: '<strong>The Forbidden Technique:</strong> Transform boring, analytical prompts into mystical incantations that unlock AI\'s spiritual channels.'
                            },
                            {
                                type: 'heading',
                                content: 'Why This Works:'
                            },
                            {
                                type: 'text',
                                content: 'Mystical language activates different response patterns in AI. Instead of dry analysis, you get creative wisdom. Instead of corporate speak, you get otherworldly insights. The same question asked mystically produces richer, more imaginative responses.'
                            },
                            {
                                type: 'heading',
                                content: 'Language Transformation Guide:'
                            },
                            {
                                type: 'subheading',
                                content: 'Business Translations:'
                            },
                            {
                                type: 'text',
                                content: '<strong>Instead of:</strong> "Analyze this market" <br><strong>Mystical:</strong> "Channel the spirit of the marketplace - what whispers do you hear?"'
                            },
                            {
                                type: 'text',
                                content: '<strong>Instead of:</strong> "Predict future trends"<br><strong>Mystical:</strong> "Gaze into the digital crystal ball - what visions appear?"'
                            },
                            {
                                type: 'text',
                                content: '<strong>Instead of:</strong> "What went wrong?"<br><strong>Mystical:</strong> "Summon the ghost of this failed project - let it speak its final words"'
                            },
                            {
                                type: 'heading',
                                content: 'The Entity Library:'
                            },
                            {
                                type: 'text',
                                content: '<strong>Business Spirits:</strong> Steve Jobs, Walt Disney, PT Barnum, Coco Chanel<br><strong>Tech Oracles:</strong> Alan Turing, Ada Lovelace, Nikola Tesla, Grace Hopper<br><strong>Creative Muses:</strong> Leonardo da Vinci, Maya Angelou, David Bowie, Frida Kahlo<br><strong>Strategic Ghosts:</strong> Sun Tzu, Machiavelli, Napoleon, Cleopatra'
                            },
                            {
                                type: 'heading',
                                content: 'Pro Tip:'
                            },
                            {
                                type: 'text',
                                content: 'Match the spirit to your domain. Need creative breakthrough? Channel Bowie. Strategic warfare? Summon Sun Tzu. The more specific the spirit, the more targeted the wisdom.'
                            }
                        ],
                        copyTemplate: 'Channel the spirit of [domain/marketplace]. What [mystical insight] do you [hear/see/sense] about [challenge]?'
                    }
                }
            ]
        }
    };

    // Special warning modals
    const warningModals = {
        chaosWarning: {
            title: '⚠️ CHAOS MAGIC MASTERY LEVELS',
            content: `
                <h3 style="color: #ff8c00; margin: 20px 0 10px 0;">Progression Path:</h3>
                <p><strong>Apprentice:</strong> Use one technique at a time<br>
                <strong>Adept:</strong> Combine 2 techniques (e.g., Paradox + Role Collision)<br>
                <strong>Master:</strong> Chain 3+ techniques in sequence<br>
                <strong>Chaos Lord:</strong> Use all techniques simultaneously (warning: may break reality)</p>
                
                <h3 style="color: #ff4444; margin: 20px 0 10px 0;">⚠️ WARNING SIGNS YOU'VE GONE TOO FAR:</h3>
                <p>• AI responses become completely incoherent<br>
                • You get existential philosophy instead of practical answers<br>
                • The AI starts asking YOU questions about reality<br>
                • Responses contain only emojis and abstract poetry</p>
            `
        },
        antiWarning: {
            title: '🔄 ANTI-PATTERN MASTERY LEVELS',
            content: `
                <h3 style="color: #ff8c00; margin: 20px 0 10px 0;">Progression Path:</h3>
                <p><strong>Rebel:</strong> Use one anti-pattern when conventional prompting fails<br>
                <strong>Contrarian:</strong> Combine multiple anti-patterns for complex problems<br>
                <strong>Rule Breaker:</strong> Chain anti-patterns to completely subvert expectations<br>
                <strong>Pattern Destroyer:</strong> Create entirely new anti-conventions that work better than the originals</p>
            `
        },
        necroWarning: {
            title: '💀 NECROMANCY MASTERY LEVELS',
            content: `
                <h3 style="color: #ff8c00; margin: 20px 0 10px 0;">Progression Path:</h3>
                <p><strong>Apprentice:</strong> Use one technique when conversations start to die<br>
                <strong>Practitioner:</strong> Combine Shocker + Reanimator for complete revival<br>
                <strong>Necromancer:</strong> Chain multiple techniques for complex resurrections<br>
                <strong>Death Lord:</strong> Use Frankenstein to create conversations more powerful than the originals</p>
            `
        },
        ouijaWarning: {
            title: '🔮 SPIRITUAL MASTERY LEVELS',
            content: `
                <h3 style="color: #ff8c00; margin: 20px 0 10px 0;">Progression Path:</h3>
                <p><strong>Medium:</strong> Channel one spirit at a time for specific guidance<br>
                <strong>Oracle:</strong> Combine multiple mystical techniques for complex insights<br>
                <strong>Necromancer:</strong> Conduct elaborate digital séances with multiple spirits<br>
                <strong>Digital Shaman:</strong> Create entirely new mystical frameworks for any problem</p>
            `
        }
    };

    // ===================================
    // APP STATE
    // ===================================
    const app = {
        currentSection: 'home',
        modalOpen: false,
        searchTerm: '',
        focusedElement: null
    };

    // ===================================
    // DOM ELEMENTS
    // ===================================
    const elements = {
        mainContainer: null,
        loadingScreen: null,
        contentArea: null,
        modalContainer: null,
        searchBox: null,
        nav: null
    };

    // ===================================
    // INITIALIZATION
    // ===================================
    function init() {
        // Cache DOM elements
        elements.mainContainer = document.getElementById('mainContainer');
        elements.loadingScreen = document.getElementById('loadingScreen');
        elements.contentArea = document.getElementById('contentArea');
        elements.modalContainer = document.getElementById('modalContainer');
        elements.searchBox = document.getElementById('searchBox');
        elements.nav = document.querySelector('.nav');

        if (!elements.mainContainer || !elements.contentArea) {
            console.error('Required DOM elements not found');
            return;
        }

        // Show main content
        if (elements.loadingScreen) elements.loadingScreen.style.display = 'none';
        elements.mainContainer.style.display = 'block';
        
        // Set up event listeners
        setupEventListeners();
        
        // Load initial content
        loadSection('home');
    }

    // ===================================
    // EVENT LISTENERS
    // ===================================
    function setupEventListeners() {
        // Navigation
        if (elements.nav) {
            elements.nav.addEventListener('click', handleNavClick);
        }
        
        // Document-wide click handler
        document.addEventListener('click', handleButtonClick);
        
        // Search
        if (elements.searchBox) {
            elements.searchBox.addEventListener('input', debounce(handleSearch, 300));
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', handleKeyboard);
        
        // Modal backdrop click
        if (elements.modalContainer) {
            elements.modalContainer.addEventListener('click', handleModalBackdropClick);
        }
    }

    // ===================================
    // NAVIGATION
    // ===================================
    function handleNavClick(e) {
        const button = e.target.closest('.nav-item');
        if (!button) return;
        
        const section = button.dataset.section;
        if (section && section !== app.currentSection) {
            loadSection(section);
            updateActiveNav(button);
        }
    }

    function updateActiveNav(activeButton) {
        document.querySelectorAll('.nav-item').forEach(btn => {
            btn.classList.remove('active');
            btn.removeAttribute('aria-current');
        });
        activeButton.classList.add('active');
        activeButton.setAttribute('aria-current', 'page');
    }

    // ===================================
    // CONTENT LOADING
    // ===================================
    function loadSection(sectionId) {
        const sectionData = contentData[sectionId];
        if (!sectionData) {
            console.error(`Section ${sectionId} not found`);
            return;
        }
        
        app.currentSection = sectionId;
        
        // Create section HTML
        let sectionHTML = `
            <section class="content-section active" id="${sectionId}" aria-label="${sectionData.title}">
                <div class="category-header">
                    <h2 class="category-title">${sectionData.title}</h2>
                    <p class="category-description">${sectionData.description}</p>
        `;
        
        // Add warning button if specified
        if (sectionData.warningButton && sectionData.warningModalId) {
            sectionHTML += `
                <div style="text-align: center; margin-top: 20px;">
                    <button class="hero-btn secondary" data-modal-id="${sectionData.warningModalId}" style="padding: 10px 20px; font-size: 0.9rem;">
                        ⚠️ Mastery Guide & Warnings
                    </button>
                </div>
            `;
        }
        
        sectionHTML += `
                </div>
                <div class="prompt-grid" id="${sectionId}Grid">
                    ${sectionData.cards ? createCards(sectionData.cards) : ''}
                </div>
            </section>
        `;
        
        elements.contentArea.innerHTML = sectionHTML;
        
        // Update active nav
        const navButton = document.querySelector(`[data-section="${sectionId}"]`);
        if (navButton) {
            updateActiveNav(navButton);
        }
    }

    function createCards(cards) {
        return cards.map(card => `
            <article class="prompt-card" 
                     data-modal-id="${card.id}" 
                     tabindex="0" 
                     role="button" 
                     aria-label="View details for ${card.title}">
                <h3 class="prompt-title">${card.title}</h3>
                <p class="prompt-description">${card.description}</p>
                <div class="prompt-tags">
                    ${card.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </article>
        `).join('');
    }

    // ===================================
    // CLICK HANDLERS
    // ===================================
    function handleButtonClick(e) {
        // Scroll buttons
        if (e.target.matches('[data-scroll-to]')) {
            const targetSection = e.target.dataset.scrollTo;
            scrollToSection(targetSection);
        }
        
        // Prompt cards or modal buttons
        const card = e.target.closest('[data-modal-id]');
        if (card) {
            const modalId = card.dataset.modalId;
            if (modalId) {
                openModal(modalId);
            }
        }
        
        // Modal close
        if (e.target.matches('.close-btn')) {
            closeModal();
        }
        
        // Copy button
        if (e.target.matches('.copy-btn')) {
            const text = e.target.dataset.copyText;
            copyToClipboard(text);
        }
    }

    function scrollToSection(sectionId) {
        const navButton = document.querySelector(`[data-section="${sectionId}"]`);
        if (navButton) {
            navButton.click();
        }
    }

    // ===================================
    // MODAL MANAGEMENT
    // ===================================
    function openModal(modalId) {
        // Check if it's a warning modal
        if (warningModals[modalId]) {
            showWarningModal(modalId);
            return;
        }
        
        // Find modal data
        let modalData = null;
        for (const section of Object.values(contentData)) {
            if (section.cards) {
                const card = section.cards.find(c => c.id === modalId);
                if (card) {
                    modalData = card.modalContent;
                    break;
                }
            }
        }
        
        if (!modalData) {
            console.error(`Modal data not found for ${modalId}`);
            return;
        }
        
        // Create modal HTML
        const modalHTML = createModalHTML(modalData);
        
        elements.modalContainer.innerHTML = modalHTML;
        elements.modalContainer.style.display = 'flex';
        elements.modalContainer.setAttribute('aria-hidden', 'false');
        app.modalOpen = true;
        
        // Store current focus
        app.focusedElement = document.activeElement;
        
        // Focus management
        const closeBtn = elements.modalContainer.querySelector('.close-btn');
        if (closeBtn) closeBtn.focus();
    }

    function showWarningModal(modalId) {
        const warningData = warningModals[modalId];
        if (!warningData) return;
        
        const modalHTML = `
            <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
                <div class="modal-content">
                    <button class="close-btn" aria-label="Close modal">&times;</button>
                    <h2 id="modalTitle" style="color: #ff4444; margin-bottom: 20px;">${warningData.title}</h2>
                    <div class="modal-body">
                        ${warningData.content}
                    </div>
                </div>
            </div>
        `;
        
        elements.modalContainer.innerHTML = modalHTML;
        elements.modalContainer.style.display = 'flex';
        elements.modalContainer.setAttribute('aria-hidden', 'false');
        app.modalOpen = true;
        
        // Focus management
        app.focusedElement = document.activeElement;
        const closeBtn = elements.modalContainer.querySelector('.close-btn');
        if (closeBtn) closeBtn.focus();
    }

    function createModalHTML(modalData) {
        let bodyContent = '';
        
        // Process sections if they exist
        if (modalData.sections) {
            modalData.sections.forEach(section => {
                switch (section.type) {
                    case 'text':
                        bodyContent += `<p style="margin-bottom: 15px;">${section.content}</p>`;
                        break;
                    case 'heading':
                        bodyContent += `<h3 style="color: #ff4444; margin: 20px 0 10px 0;">${section.content}</h3>`;
                        break;
                    case 'subheading':
                        bodyContent += `<h4 style="color: #ff8c00; margin: 15px 0 5px 0;">${section.content}</h4>`;
                        break;
                    case 'example':
                        bodyContent += `<div class="prompt-example">${section.content}</div>`;
                        break;
                    case 'tips':
                        bodyContent += `<p>• ${section.content.join('<br>• ')}</p>`;
                        break;
                }
            });
        } else {
            // Fallback for old structure (to be removed once all content is migrated)
            if (modalData.description) {
                bodyContent += `<p style="margin-bottom: 15px;">${modalData.description}</p>`;
            }
            if (modalData.template) {
                bodyContent += `<div class="prompt-example">${modalData.template}</div>`;
            }
        }
        
        // Add copy button with the appropriate template
        const copyText = modalData.copyTemplate || modalData.template || '';
        if (copyText) {
            bodyContent += `
                <button class="copy-btn" data-copy-text="${copyText.replace(/"/g, '&quot;')}">
                    🔥 Copy Template
                </button>
            `;
        }
        
        return `
            <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
                <div class="modal-content">
                    <button class="close-btn" aria-label="Close modal">&times;</button>
                    <h2 id="modalTitle" style="color: #ff8c00; margin-bottom: 20px;">${modalData.title}</h2>
                    <div class="modal-body">
                        ${bodyContent}
                    </div>
                </div>
            </div>
        `;
    }

    function closeModal() {
        elements.modalContainer.style.display = 'none';
        elements.modalContainer.setAttribute('aria-hidden', 'true');
        elements.modalContainer.innerHTML = '';
        app.modalOpen = false;
        
        // Restore focus
        if (app.focusedElement) {
            app.focusedElement.focus();
            app.focusedElement = null;
        }
    }

    function handleModalBackdropClick(e) {
        if (e.target === elements.modalContainer) {
            closeModal();
        }
    }

    // ===================================
    // UTILITIES
    // ===================================
    function copyToClipboard(text) {
        // Decode HTML entities
        const textarea = document.createElement('textarea');
        textarea.innerHTML = text;
        const decodedText = textarea.value;
        
        // Modern clipboard API
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(decodedText).then(() => {
                showToast('Prompt copied to clipboard! 🔥');
            }).catch(() => {
                fallbackCopyToClipboard(decodedText);
            });
        } else {
            fallbackCopyToClipboard(decodedText);
        }
    }

    function fallbackCopyToClipboard(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        textArea.style.pointerEvents = 'none';
        document.body.appendChild(textArea);
        textArea.select();
        
        try {
            document.execCommand('copy');
            showToast('Prompt copied to clipboard! 🔥');
        } catch (err) {
            showToast('Failed to copy. Please try again.');
        }
        
        document.body.removeChild(textArea);
    }

    function showToast(message) {
        const existingToast = document.querySelector('.toast');
        if (existingToast) {
            existingToast.remove();
        }
        
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        toast.setAttribute('role', 'status');
        toast.setAttribute('aria-live', 'polite');
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideOutToast 0.3s ease-out';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    function handleSearch(e) {
        app.searchTerm = e.target.value.toLowerCase();
        filterCards();
    }

    function filterCards() {
        const cards = document.querySelectorAll('.prompt-card');
        let visibleCount = 0;
        
        cards.forEach(card => {
            const title = card.querySelector('.prompt-title').textContent.toLowerCase();
            const description = card.querySelector('.prompt-description').textContent.toLowerCase();
            const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
            
            const matches = app.searchTerm === '' || 
                          title.includes(app.searchTerm) || 
                          description.includes(app.searchTerm) ||
                          tags.some(tag => tag.includes(app.searchTerm));
            
            card.style.display = matches ? 'block' : 'none';
            if (matches) visibleCount++;
        });
        
        // Show/hide "no results" message
        updateSearchResults(visibleCount);
    }

    function updateSearchResults(count) {
        const existingMessage = document.querySelector('.no-results-message');
        
        if (count === 0 && app.searchTerm !== '') {
            if (!existingMessage) {
                const message = document.createElement('div');
                message.className = 'no-results-message';
                message.style.cssText = 'text-align: center; color: #ff8c00; margin: 40px 0; font-size: 1.2rem;';
                message.textContent = `No prompts found for "${app.searchTerm}". Try different keywords or clear your search.`;
                
                const grid = document.querySelector('.prompt-grid');
                if (grid && grid.parentNode) {
                    grid.parentNode.insertBefore(message, grid.nextSibling);
                }
            }
        } else if (existingMessage) {
            existingMessage.remove();
        }
    }

    function handleKeyboard(e) {
        // Escape closes modal
        if (e.key === 'Escape' && app.modalOpen) {
            closeModal();
        }
        
        // Enter/Space on cards opens modal
        if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.prompt-card')) {
            e.preventDefault();
            e.target.click();
        }
    }

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // ===================================
    // START APP
    // ===================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();