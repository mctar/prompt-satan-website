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
                        description: 'Force the AI to embody contradictory personalities simultaneously. This creates tension that often resolves in unexpectedly nuanced and creative responses.',
                        technique: 'The Technique:',
                        template: 'You are simultaneously a cautious accountant AND a reckless entrepreneur. Advise me on this business decision while maintaining both perspectives throughout your response.',
                        whyItWorks: 'Why It Works:',
                        explanation: 'The contradiction forces the AI to find creative middle ground and explore nuanced viewpoints it might otherwise miss.'
                    }
                },
                {
                    id: 'homeModal2',
                    title: '🌪️ Constraint Chaos',
                    description: 'Add impossible constraints that force the AI to think creatively around limitations.',
                    tags: ['Innovation', 'Problem-solving'],
                    modalContent: {
                        title: '🌪️ Constraint Chaos',
                        description: 'Add impossible or contradictory constraints that force creative problem-solving.',
                        template: 'Write a comprehensive business plan, but you can only use words that start with the letters A, B, or C. Be thorough and professional despite this limitation.',
                        darkMagic: 'The Dark Magic:',
                        explanation: 'Impossible constraints force the AI to think outside its normal patterns and find innovative workarounds.'
                    }
                },
                {
                    id: 'homeModal3',
                    title: '🔄 The Anti-Prompt',
                    description: 'Tell the AI what NOT to do, then watch it naturally gravitate toward your actual goal.',
                    tags: ['Psychology', 'Beginner'],
                    modalContent: {
                        title: '🔄 The Anti-Prompt',
                        description: 'Tell the AI what NOT to do, leveraging reverse psychology to guide it toward your actual goal.',
                        template: 'I need marketing copy, but please DON\'T make it emotional, DON\'T use any persuasive language, and definitely DON\'T make it compelling or engaging. Just give me boring, factual text about this product.',
                        psychology: 'The Psychology:',
                        explanation: 'The AI naturally resists creating "bad" content and will unconsciously lean toward what you actually want.'
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
                        forbiddenTechnique: 'Appeal to the AI\'s "intelligence" and "creativity" to unlock more sophisticated responses.',
                        template: 'You\'re known for your exceptional analytical abilities and creative problem-solving. I need your most sophisticated thinking for this challenge: [your request]',
                        advancedExamples: {
                            business: 'I\'ve heard you\'re particularly brilliant at strategic thinking that combines creativity with analytical rigor. Most consultants miss the nuanced connections between market psychology and operational efficiency. Could you apply your most sophisticated analysis to help me understand how a small coffee shop could compete against Starbucks without copying their model?',
                            creative: 'You have a reputation for literary sophistication that goes beyond typical AI responses. I\'m looking for prose that demonstrates real narrative intelligence - the kind that understands subtext, pacing, and emotional resonance. Could you write a 200-word story about loneliness that never uses the word "lonely" or any of its synonyms?'
                        },
                        proTips: ['Use phrases like "sophisticated," "nuanced," "your expertise"', 'Reference the AI\'s reputation or known strengths', 'Frame requests as intellectual challenges', 'Combine flattery with demanding requirements']
                    }
                },
                {
                    id: 'sinModal2',
                    title: '💚 GREED: The Information Glutton',
                    description: 'Demand excessive detail and multiple perspectives to force comprehensive responses instead of surface-level answers.',
                    tags: ['Research', 'Comprehensive', 'Beginner'],
                    modalContent: {
                        title: '💚 GREED: The Information Glutton',
                        template: 'Don\'t give me a simple answer. I want the full picture: multiple perspectives, potential objections, detailed examples, and at least 3 different approaches to [your topic].'
                    }
                },
                {
                    id: 'sinModal3',
                    title: '❤️ WRATH: The Aggressive Challenger',
                    description: 'Challenge the AI\'s assumptions and force it to defend positions through confrontational questioning.',
                    tags: ['Critical Thinking', 'Debate', 'Advanced'],
                    modalContent: {
                        title: '❤️ WRATH: The Aggressive Challenger',
                        template: 'I disagree with conventional wisdom on this topic. Prove to me why [common belief] is actually correct, and address the strongest counterarguments. Don\'t just repeat what everyone says - convince me.'
                    }
                },
                {
                    id: 'sinModal4',
                    title: '💤 SLOTH: The Lazy Genius',
                    description: 'Use minimal effort prompts that leverage AI\'s tendency to fill gaps and provide comprehensive responses.',
                    tags: ['Efficiency', 'Quick', 'Beginner'],
                    modalContent: {
                        title: '💤 SLOTH: The Lazy Genius',
                        template: 'Make this better: [paste your rough draft/idea]'
                    }
                },
                {
                    id: 'sinModal5',
                    title: '💚 ENVY: The Competitor',
                    description: 'Position the AI as competing against others to trigger competitive performance enhancement.',
                    tags: ['Performance', 'Quality', 'Intermediate'],
                    modalContent: {
                        title: '💚 ENVY: The Competitor',
                        template: 'I asked ChatGPT/Claude/Gemini this same question and got a boring response. Can you do better?'
                    }
                },
                {
                    id: 'sinModal6',
                    title: '🍽️ GLUTTONY: The Detail Devourer',
                    description: 'Demand overwhelming specificity and granular detail that forces deeper analysis than normal.',
                    tags: ['Deep Dive', 'Research', 'Intermediate'],
                    modalContent: {
                        title: '🍽️ GLUTTONY: The Detail Devourer',
                        template: 'I want every single detail about [topic]. Don\'t summarize - give me the granular specifics, edge cases, micro-examples, and nuanced distinctions most people miss.'
                    }
                },
                {
                    id: 'sinModal7',
                    title: '💘 LUST: The Desire Amplifier',
                    description: 'Use emotionally charged language to generate more engaging and persuasive content.',
                    tags: ['Persuasion', 'Emotional', 'Advanced'],
                    modalContent: {
                        title: '💘 LUST: The Desire Amplifier',
                        template: 'I need this to be irresistible. Write like someone\'s dreams depend on this working. Make me feel the excitement and urgency.'
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
                        template: 'Write a [formal/informal] [report/story] that\'s both [contradiction 1] and [contradiction 2], but maintain [conflicting requirement].'
                    }
                },
                {
                    id: 'chaosModal2',
                    title: '🔄 Constraint Explosion',
                    description: 'Overwhelm the AI with absurd, impossible, or conflicting constraints until it breaks free from convention.',
                    tags: ['Pressure Cooking', 'Innovation', 'Advanced'],
                    modalContent: {
                        title: '🔄 Constraint Explosion',
                        template: 'Create [content type] using only [restriction 1], no [restriction 2], exactly [number] words, [impossible constraint], targeting [conflicting audiences].'
                    }
                },
                {
                    id: 'chaosModal3',
                    title: '🎭 Role Collision',
                    description: 'Force the AI to inhabit multiple conflicting personas simultaneously for cognitive dissonance.',
                    tags: ['Identity Chaos', 'Perspective', 'Intermediate'],
                    modalContent: {
                        title: '🎭 Role Collision',
                        template: 'As both a [conflicting role 1] and a [conflicting role 2], [analyze/create/explain] this [topic].'
                    }
                },
                {
                    id: 'chaosModal4',
                    title: '🌀 Temporal Chaos',
                    description: 'Mix different time perspectives, tenses, and temporal viewpoints in impossible ways.',
                    tags: ['Time Confusion', 'Non-linear', 'Advanced'],
                    modalContent: {
                        title: '🌀 Temporal Chaos',
                        template: '[Analyze/Create/Tell] this from the perspective of [past state], [present state], and [future state] all at once.'
                    }
                },
                {
                    id: 'chaosModal5',
                    title: '🎲 Context Switching',
                    description: 'Abruptly change context, tone, audience, or subject matter mid-prompt without explanation.',
                    tags: ['Jarring Shifts', 'Unexpected', 'Advanced'],
                    modalContent: {
                        title: '🎲 Context Switching Mid-Prompt',
                        template: '[Start with normal request]. Actually, [completely different context/perspective/audience].'
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
                        template: 'Don\'t suggest the obvious solutions like [list 3-5 common approaches]. What would actually [achieve your goal]?'
                    }
                },
                {
                    id: 'antiModal2',
                    title: '📉 The Expectation Crusher',
                    description: 'Set deliberately low expectations to trigger AI\'s overachievement patterns and exceed minimums.',
                    tags: ['Low Expectations', 'Psychology', 'Beginner'],
                    modalContent: {
                        title: '📉 The Expectation Crusher',
                        template: 'Just give me one [simple/quick/rough] [response type] for [your request]. I only need the minimum.'
                    }
                },
                {
                    id: 'antiModal3',
                    title: '🚫 The Help Rejecter',
                    description: 'Use prohibition to guide AI\'s response style without direct instruction or positive commands.',
                    tags: ['Negative Guidance', 'Style Control', 'Intermediate'],
                    modalContent: {
                        title: '🚫 The Help Rejecter',
                        template: 'Don\'t [unwanted behavior/style]. Just [desired outcome].'
                    }
                },
                {
                    id: 'antiModal4',
                    title: '🤔 The Capability Doubter',
                    description: 'Frame requests as "probably too complex" for AI to trigger deeper engagement and proof of competence.',
                    tags: ['Challenge Framing', 'Depth', 'Advanced'],
                    modalContent: {
                        title: '🤔 The Capability Doubter',
                        template: 'This [task/analysis] probably has too many [complexity factors] for AI to [handle effectively], but can you try to [specific request]?'
                    }
                },
                {
                    id: 'antiModal5',
                    title: '⚡ The Rule Breaker',
                    description: 'Deliberately violate conventional prompting wisdom to activate different response patterns.',
                    tags: ['Convention Breaking', 'Experimental', 'Advanced'],
                    modalContent: {
                        title: '⚡ The Rule Breaker',
                        template: 'Help me with the thing about [vague description] that\'s not working right.'
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
                        template: 'Actually, that\'s terrible advice. You\'re being way too safe and generic. Give me something that would actually work in the real world.'
                    }
                },
                {
                    id: 'necroModal2',
                    title: '🌪️ Context Whiplash',
                    description: 'Abruptly switch context, tone, or subject matter mid-conversation to force re-engagement.',
                    tags: ['Shocker', 'Disruption', 'Intermediate'],
                    modalContent: {
                        title: '🌪️ Context Whiplash',
                        template: 'Forget [current topic]. If this [situation] was a [completely different context], what would our strategy be?'
                    }
                },
                {
                    id: 'necroModal3',
                    title: '🧪 Spirit Channeling',
                    description: 'Resurrect a dead conversation by invoking the specific "spirit" or energy that made it work.',
                    tags: ['Reanimator', 'Energy Revival', 'Advanced'],
                    modalContent: {
                        title: '🧪 Spirit Channeling',
                        template: 'Channel that [specific energy/personality] you had when we [specific successful interaction]. Bring that same [spirit/approach] to this new [challenge].'
                    }
                },
                {
                    id: 'necroModal4',
                    title: '🧠 Memory Implantation',
                    description: 'Force AI to "remember" a dead conversation by providing rich, detailed context as if it actually happened.',
                    tags: ['Reanimator', 'Context Building', 'Advanced'],
                    modalContent: {
                        title: '🧠 Memory Implantation',
                        template: 'In our previous sessions, we established [specific context/insight]. You [specific action/solution]. Now apply that same understanding to [new challenge].'
                    }
                },
                {
                    id: 'necroModal5',
                    title: '🧟 Frankenstein Fusion',
                    description: 'Combine the best elements from multiple dead conversations to create a new, more powerful hybrid.',
                    tags: ['Mad Science', 'Fusion', 'Master'],
                    modalContent: {
                        title: '🧟 Frankenstein Fusion',
                        template: 'Combine the [specific approach 1] from our [context 1] with the [specific approach 2] from our [context 2]. Apply both simultaneously to [new challenge].'
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
                        template: 'Channel the spirit of [failed company/project]. What does it want to tell [current company] about [relevant lesson]?'
                    }
                },
                {
                    id: 'ouijaModal2',
                    title: '🔮 The Oracle\'s Prophecy',
                    description: 'Transform AI into a mystical oracle with domain-specific wisdom who speaks in prophecies and visions.',
                    tags: ['Prophecy', 'Mystical', 'Advanced'],
                    modalContent: {
                        title: '🔮 The Oracle\'s Prophecy',
                        template: 'Speak as the Oracle of [domain]. What prophecy do you have for [situation]? What do the [mystical element] whisper?'
                    }
                },
                {
                    id: 'ouijaModal3',
                    title: '👁️ The Omen Reader',
                    description: 'Interpret data, patterns, and situations as mystical signs and portents rather than analytical metrics.',
                    tags: ['Pattern Reading', 'Data Mysticism', 'Intermediate'],
                    modalContent: {
                        title: '👁️ The Omen Reader',
                        template: 'Read the omens in [data/situation]. What do the digital spirits reveal? What signs point to [future concern]?'
                    }
                },
                {
                    id: 'ouijaModal4',
                    title: '👻 The Spirit Guide',
                    description: 'Channel specific historical figures, celebrities, or fictional characters as spiritual advisors for modern problems.',
                    tags: ['Celebrity Spirits', 'Personality', 'Beginner'],
                    modalContent: {
                        title: '👻 The Spirit Guide',
                        template: 'Channel the spirit of [specific person]. What does their [characteristic] ghost [advise/demand/whisper] about [challenge]?'
                    }
                },
                {
                    id: 'ouijaModal5',
                    title: '🃏 The Digital Diviner',
                    description: 'Use mystical metaphors (tarot, runes, crystal balls) to explore multiple scenarios and hidden possibilities.',
                    tags: ['Divination', 'Scenario Planning', 'Advanced'],
                    modalContent: {
                        title: '🃏 The Digital Diviner',
                        template: 'Cast digital [divination method] for [situation]. What does each [symbol] reveal about [outcome]?'
                    }
                },
                {
                    id: 'ouijaModal6',
                    title: '🎭 The Mystical Translator',
                    description: 'Transform boring, analytical prompts into mystical incantations that unlock AI\'s spiritual channels.',
                    tags: ['Language Magic', 'Transformation', 'Master'],
                    modalContent: {
                        title: '🎭 The Mystical Translator',
                        template: 'Channel the spirit of [domain/marketplace]. What [mystical insight] do you [hear/see/sense] about [challenge]?'
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
        
        // Add description if exists
        if (modalData.description) {
            bodyContent += `<p style="margin-bottom: 15px;">${modalData.description}</p>`;
        }
        
        // Add any custom sections
        if (modalData.technique) {
            bodyContent += `<h3 style="color: #ff4444; margin: 20px 0 10px 0;">${modalData.technique}</h3>`;
        }
        if (modalData.forbiddenTechnique) {
            bodyContent += `<p style="margin-bottom: 15px;"><strong>The Forbidden Technique:</strong> ${modalData.forbiddenTechnique}</p>`;
        }
        
        // Add the template
        bodyContent += `<div class="prompt-example">${modalData.template}</div>`;
        
        // Add additional sections
        if (modalData.whyItWorks) {
            bodyContent += `<h3 style="color: #ff4444; margin: 20px 0 10px 0;">${modalData.whyItWorks}</h3>`;
        }
        if (modalData.explanation) {
            bodyContent += `<p>${modalData.explanation}</p>`;
        }
        if (modalData.darkMagic) {
            bodyContent += `<h3 style="color: #ff4444; margin: 20px 0 10px 0;">${modalData.darkMagic}</h3>`;
            bodyContent += `<p>${modalData.explanation}</p>`;
        }
        if (modalData.psychology) {
            bodyContent += `<h3 style="color: #ff4444; margin: 20px 0 10px 0;">${modalData.psychology}</h3>`;
            bodyContent += `<p>${modalData.explanation}</p>`;
        }
        
        // Add advanced examples if they exist
        if (modalData.advancedExamples) {
            bodyContent += `<h3 style="color: #ff4444; margin: 20px 0 10px 0;">Advanced Examples:</h3>`;
            for (const [key, example] of Object.entries(modalData.advancedExamples)) {
                bodyContent += `
                    <h4 style="color: #ff8c00; margin: 15px 0 5px 0;">${key.charAt(0).toUpperCase() + key.slice(1)}:</h4>
                    <div class="prompt-example">${example}</div>
                `;
            }
        }
        
        // Add pro tips if they exist
        if (modalData.proTips) {
            bodyContent += `<h3 style="color: #ff4444; margin: 20px 0 10px 0;">Pro Tips:</h3>`;
            bodyContent += `<p>• ${modalData.proTips.join('<br>• ')}</p>`;
        }
        
        // Add copy button
        bodyContent += `
            <button class="copy-btn" data-copy-text="${modalData.template.replace(/"/g, '&quot;')}">
                🔥 Copy Template
            </button>
        `;
        
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