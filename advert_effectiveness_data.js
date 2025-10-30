// Market data for advertising effectiveness analysis
// 25 markets (excluding Pakistan and Israel)
const MARKET_DATA = {
    'USA': {
        consideration: { nonCeleb: [6, 3, 4, 5, 6], celebrity: [5, 6], avgNonCeleb: 4.8, avgCeleb: 5.5, diff: 0.7 },
        intent: { nonCeleb: [2, 0, 3, 1, 1], celebrity: [1, 2], avgNonCeleb: 1.4, avgCeleb: 1.5, diff: 0.1 }
    },
    'UK': {
        consideration: { nonCeleb: [3, 3, 6, 11, 10], celebrity: [7, 8], avgNonCeleb: 6.6, avgCeleb: 7.5, diff: 0.9 },
        intent: { nonCeleb: [-3, 4, 11, 6, 2], celebrity: [3, 4], avgNonCeleb: 4.0, avgCeleb: 3.5, diff: -0.5 }
    },
    'Germany': {
        consideration: { nonCeleb: [8, 3, 5, 4, 5], celebrity: [6, 4], avgNonCeleb: 5.0, avgCeleb: 5.0, diff: 0.0 },
        intent: { nonCeleb: [2, 5, 2, 4, 8], celebrity: [5, 5], avgNonCeleb: 4.2, avgCeleb: 5.0, diff: 0.8 }
    },
    'France': {
        consideration: { nonCeleb: [-2, 5, 6, 6, 8], celebrity: [5, 6], avgNonCeleb: 4.6, avgCeleb: 5.5, diff: 0.9 },
        intent: { nonCeleb: [2, 1, -1, 3, 7], celebrity: [3, 2], avgNonCeleb: 2.4, avgCeleb: 2.5, diff: 0.1 }
    },
    'Italy': {
        consideration: { nonCeleb: [9, 4, 4, 6, 3], celebrity: [5, 3], avgNonCeleb: 5.2, avgCeleb: 4.0, diff: -1.2 },
        intent: { nonCeleb: [0, 2, 1, 2, 0], celebrity: [1, 2], avgNonCeleb: 1.0, avgCeleb: 1.5, diff: 0.5 }
    },
    'Russia': {
        consideration: { nonCeleb: [7, 7, 7, 5, 2], celebrity: [6, 8], avgNonCeleb: 5.6, avgCeleb: 7.0, diff: 1.4 },
        intent: { nonCeleb: [2, 2, 4, 1, 1], celebrity: [1, 3], avgNonCeleb: 2.0, avgCeleb: 2.0, diff: 0.0 }
    },
    'Saudi Arabia': {
        consideration: { nonCeleb: [21, 9, 21, 13, 2], celebrity: [15, 10], avgNonCeleb: 13.2, avgCeleb: 12.5, diff: -0.7 },
        intent: { nonCeleb: [18, 28, 20, 28, 22], celebrity: [25, 18], avgNonCeleb: 23.2, avgCeleb: 21.5, diff: -1.7 }
    },
    'Kuwait': {
        consideration: { nonCeleb: [4, 3, 3, 10, 6], celebrity: [6, 5], avgNonCeleb: 5.2, avgCeleb: 5.5, diff: 0.3 },
        intent: { nonCeleb: [10, 6, 10, 4, 4], celebrity: [8, 4], avgNonCeleb: 6.8, avgCeleb: 6.0, diff: -0.8 }
    },
    'India': {
        consideration: { nonCeleb: [8, 11, 20, 19, 20], celebrity: [17, 19], avgNonCeleb: 15.6, avgCeleb: 18.0, diff: 2.4 },
        intent: { nonCeleb: [9, 14, 6, 10, 6], celebrity: [10, 7], avgNonCeleb: 9.0, avgCeleb: 8.5, diff: -0.5 }
    },
    'China': {
        consideration: { nonCeleb: [8, 7, 6, 9, 3], celebrity: [7, 7], avgNonCeleb: 6.6, avgCeleb: 7.0, diff: 0.4 },
        intent: { nonCeleb: [3, 4, 3, 5, 5], celebrity: [5, 4], avgNonCeleb: 4.0, avgCeleb: 4.5, diff: 0.5 }
    },
    'Canada': {
        consideration: { nonCeleb: [10, 4, 3, 3, 4], celebrity: [5, 4], avgNonCeleb: 4.8, avgCeleb: 4.5, diff: -0.3 },
        intent: { nonCeleb: [4, 7, 1, 5, 5], celebrity: [5, 4], avgNonCeleb: 4.4, avgCeleb: 4.5, diff: 0.1 }
    },
    'Spain': {
        consideration: { nonCeleb: [7, 4, 3, 5, 2], celebrity: [4, 4], avgNonCeleb: 4.2, avgCeleb: 4.0, diff: -0.2 },
        intent: { nonCeleb: [3, 1, 2, 0, 1], celebrity: [2, 2], avgNonCeleb: 1.4, avgCeleb: 2.0, diff: 0.6 }
    },
    'Netherlands': {
        consideration: { nonCeleb: [14, 15, 15, 9, 9], celebrity: [13, 7], avgNonCeleb: 12.4, avgCeleb: 10.0, diff: -2.4 },
        intent: { nonCeleb: [3, 1, 2, 0, 1], celebrity: [2, 2], avgNonCeleb: 1.4, avgCeleb: 2.0, diff: 0.6 }
    },
    'Belgium': {
        consideration: { nonCeleb: [8, 11, 8, 3, 6], celebrity: [13, 7], avgNonCeleb: 7.2, avgCeleb: 10.0, diff: 2.8 },
        intent: { nonCeleb: [14, 10, 12, 19, 13], celebrity: [14, 13], avgNonCeleb: 13.6, avgCeleb: 13.5, diff: -0.1 }
    },
    'Romania': {
        consideration: { nonCeleb: [8, 11, 8, 3, 8], celebrity: [6, 6], avgNonCeleb: 7.6, avgCeleb: 6.0, diff: -1.6 },
        intent: { nonCeleb: [1, 3, 5, 3, 3], celebrity: [2, 2], avgNonCeleb: 3.0, avgCeleb: 2.0, diff: -1.0 }
    },
    'Poland': {
        consideration: { nonCeleb: [5, 7, 4, 5, 6], celebrity: [5, 5], avgNonCeleb: 5.4, avgCeleb: 5.0, diff: -0.4 },
        intent: { nonCeleb: [0, 1, 2, 5, 2], celebrity: [2, 2], avgNonCeleb: 2.0, avgCeleb: 2.0, diff: 0.0 }
    },
    'Uzbekistan': {
        consideration: { nonCeleb: [1, 6, 3, 2, 3], celebrity: [2, 4], avgNonCeleb: 3.0, avgCeleb: 3.0, diff: 0.0 },
        intent: { nonCeleb: [3, 4, 1, 2, 3], celebrity: [3, 3], avgNonCeleb: 2.6, avgCeleb: 3.0, diff: 0.4 }
    },
    'Kazakhstan': {
        consideration: { nonCeleb: [3, 0, 5, 4, 3], celebrity: [2, 2], avgNonCeleb: 3.0, avgCeleb: 2.0, diff: -1.0 },
        intent: { nonCeleb: [6, 2, 6, 3, 3], celebrity: [2, 2], avgNonCeleb: 4.0, avgCeleb: 2.0, diff: -2.0 }
    },
    'Armenia': {
        consideration: { nonCeleb: [16, 9, 14, 9, 13], celebrity: [12, 12], avgNonCeleb: 12.2, avgCeleb: 12.0, diff: -0.2 },
        intent: { nonCeleb: [12, 6, 10, 10, 10], celebrity: [7, 7], avgNonCeleb: 9.6, avgCeleb: 7.0, diff: -2.6 }
    },
    'Qatar': {
        consideration: { nonCeleb: [13, 2, 6, 3, 7], celebrity: [7, 7], avgNonCeleb: 6.2, avgCeleb: 7.0, diff: 0.8 },
        intent: { nonCeleb: [2, 5, 1, 1, 2], celebrity: [5, 5], avgNonCeleb: 2.2, avgCeleb: 5.0, diff: 2.8 }
    },
    'Oman': {
        consideration: { nonCeleb: [2, 10, 4, 4, 5], celebrity: [5, 5], avgNonCeleb: 5.0, avgCeleb: 5.0, diff: 0.0 },
        intent: { nonCeleb: [1, 7, 10, 3, 5], celebrity: [5, 6], avgNonCeleb: 5.2, avgCeleb: 5.5, diff: 0.3 }
    },
    'Bahrain': {
        consideration: { nonCeleb: [3, 6, 2, 4, 4], celebrity: [4, 4], avgNonCeleb: 3.8, avgCeleb: 4.0, diff: 0.2 },
        intent: { nonCeleb: [5, 5, 1, 3, 4], celebrity: [4, 1], avgNonCeleb: 3.6, avgCeleb: 2.5, diff: -1.1 }
    },
    'Egypt': {
        consideration: { nonCeleb: [2, 5, 5, 2, 3], celebrity: [4, 4], avgNonCeleb: 3.4, avgCeleb: 4.0, diff: 0.6 },
        intent: { nonCeleb: [5, 5, 2, 3, 1], celebrity: [4, 2], avgNonCeleb: 3.2, avgCeleb: 3.0, diff: -0.2 }
    },
    'South Korea': {
        consideration: { nonCeleb: [10, 3, 3, 2, 2], celebrity: [4, 6], avgNonCeleb: 4.0, avgCeleb: 5.0, diff: 1.0 },
        intent: { nonCeleb: [5, 3, 3, 5, 5], celebrity: [6, 11], avgNonCeleb: 4.2, avgCeleb: 8.5, diff: 4.3 }
    },
    'Japan': {
        consideration: { nonCeleb: [5, 5, 2, 3, 1], celebrity: [4, 2], avgNonCeleb: 3.2, avgCeleb: 3.0, diff: -0.2 },
        intent: { nonCeleb: [0, 2, 1, 3, 2], celebrity: [2, 1], avgNonCeleb: 1.6, avgCeleb: 1.5, diff: -0.1 }
    }
};

const MARKET_INSIGHTS = {
    'USA': 'English-speaking cultural resonance with Chris Hemsworth. Consideration lift advantage validates celebrity strategy.',
    'UK': 'Strongest consideration lift (+0.9pp) but intent decline suggests need for conversion messaging.',
    'Germany': 'Equal consideration but intent improvement (+0.8pp) indicates bottom-funnel success.',
    'France': 'Both metrics improved (+0.9pp consideration, +0.1pp intent) despite low baseline celebrity receptivity.',
    'Italy': 'Consideration declined (-1.2pp) but intent improved (+0.5pp), showing mixed performance.',
    'Russia': 'Strong consideration improvement (+1.4pp) validates celebrity approach in this market.',
    'Saudi Arabia': 'Declines in both metrics suggest celebrity messaging not culturally optimized for this market.',
    'Kuwait': 'Slight consideration improvement (+0.3pp) offset by intent decline (-0.8pp).',
    'India': 'Exceptional consideration lift (+2.4pp) but intent decline (-0.5pp) indicates conversion challenge.',
    'China': 'Modest improvements in both metrics (+0.4pp, +0.5pp) show promise for scale.',
    'Canada': 'Slight declines in consideration offset by minimal intent improvement.',
    'Spain': 'Intent improvement (+0.6pp) despite slight consideration decline.',
    'Netherlands': 'Largest consideration decline (-2.4pp) but high non-celebrity baseline (+12.4pp) explains limited celebrity value.',
    'Belgium': 'Highest consideration improvement (+2.8pp) validates strong celebrity effectiveness.',
    'Romania': 'Declines in both metrics suggest limited Western celebrity resonance.',
    'Poland': 'Consideration slight decline but intent stable, showing neutral performance.',
    'Uzbekistan': 'Equal consideration, slight intent improvement (+0.4pp).',
    'Kazakhstan': 'Significant intent decline (-2.0pp) indicates poor celebrity fit.',
    'Armenia': 'High non-celebrity baseline (+9.6pp intent) limited celebrity incremental value.',
    'Qatar': 'Regional GCC winner with exceptional intent improvement (+2.8pp).',
    'Oman': 'Equal consideration, slight intent improvement shows stable performance.',
    'Bahrain': 'Slight consideration improvement offset by intent decline.',
    'Egypt': 'Consideration improved (+0.6pp) but intent slightly declined.',
    'South Korea': 'Best overall performer with exceptional intent lift (+4.3pp). Cultural fit with celebrity endorsements.',
    'Japan': 'Slight declines in both metrics suggest need for market-specific celebrity strategy.'
};
