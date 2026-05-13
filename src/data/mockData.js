/** Rich simulated datasets — frontend only, for showcase UI. */

export const globalStats = {
  aumUsd: 4_872_000_000,
  volume24hUsd: 128_400_000,
  qualifiedInvestors: 284_200,
  tokenListings: 47,
  leaguesCovered: 12,
  avgFillMs: 42,
}

export const marketMeta = {
  venue: 'SPORTFOLIO SBE™',
  session: 'Regular',
  tz: 'America/New_York',
  regulatoryNote: 'Simulated venue for product demo — not a securities offering.',
}

/** @typedef {{ id: string; symbol: string; team: string; league: string; price: number; changePct: number; volume24h: number; capUsd: number; spark: number[] }} Listing */

/** @type {Listing[]} */
export const listings = [
  { id: '1', symbol: 'LALX', team: 'Los Angeles Lakers', league: 'NBA', price: 142.3, changePct: 1.82, volume24h: 21_400_000, capUsd: 3_120_000_000, spark: [118, 122, 119, 125, 128, 130, 129, 134, 136, 138, 140, 142.3] },
  { id: '2', symbol: 'GSWX', team: 'Golden State Warriors', league: 'NBA', price: 198.4, changePct: -0.44, volume24h: 18_900_000, capUsd: 4_010_000_000, spark: [205, 202, 201, 199, 200, 198, 197, 199, 198, 197, 199, 198.4] },
  { id: '3', symbol: 'PHXX', team: 'Phoenix Suns', league: 'NBA', price: 88.1, changePct: 2.31, volume24h: 9_200_000, capUsd: 1_480_000_000, spark: [76, 78, 79, 80, 82, 83, 84, 85, 86, 86.5, 87.2, 88.1] },
  { id: '4', symbol: 'DENX', team: 'Denver Nuggets', league: 'NBA', price: 112.6, changePct: 0.91, volume24h: 11_300_000, capUsd: 2_050_000_000, spark: [104, 105, 106, 107, 108, 109, 110, 110.5, 111, 111.4, 112, 112.6] },
  { id: '5', symbol: 'BOSY', team: 'Boston Celtics', league: 'NBA', price: 176.2, changePct: 0.62, volume24h: 16_100_000, capUsd: 3_650_000_000, spark: [168, 169, 170, 171, 172, 173, 174, 174.5, 175, 175.4, 175.9, 176.2] },
  { id: '6', symbol: 'MILX', team: 'Milwaukee Bucks', league: 'NBA', price: 94.7, changePct: -1.12, volume24h: 7_800_000, capUsd: 1_620_000_000, spark: [98, 97.5, 97, 96.5, 96, 95.5, 95.2, 95, 94.9, 94.8, 94.75, 94.7] },
  { id: '7', symbol: 'MIAX', team: 'Miami Heat', league: 'NBA', price: 81.4, changePct: 0.28, volume24h: 6_400_000, capUsd: 1_310_000_000, spark: [79, 79.5, 80, 80.2, 80.5, 80.7, 80.9, 81, 81.1, 81.2, 81.3, 81.4] },
  { id: '8', symbol: 'DALX', team: 'Dallas Mavericks', league: 'NBA', price: 103.9, changePct: 1.05, volume24h: 8_900_000, capUsd: 1_890_000_000, spark: [96, 97, 98, 99, 100, 101, 101.5, 102, 102.5, 103, 103.5, 103.9] },
  { id: '9', symbol: 'NYKX', team: 'New York Knicks', league: 'NBA', price: 124.0, changePct: 3.41, volume24h: 22_600_000, capUsd: 2_780_000_000, spark: [108, 110, 112, 114, 116, 118, 119, 120, 121, 122, 123, 124] },
  { id: '10', symbol: 'PHIY', team: 'Philadelphia 76ers', league: 'NBA', price: 91.2, changePct: -0.88, volume24h: 7_100_000, capUsd: 1_540_000_000, spark: [94, 93.5, 93, 92.5, 92.2, 92, 91.8, 91.6, 91.5, 91.4, 91.25, 91.2] },
  { id: '11', symbol: 'KCX', team: 'Kansas City Chiefs', league: 'NFL', price: 210.5, changePct: 0.74, volume24h: 31_200_000, capUsd: 5_200_000_000, spark: [200, 202, 204, 205, 206, 207, 207.5, 208, 208.8, 209.2, 209.8, 210.5] },
  { id: '12', symbol: 'SFX', team: 'San Francisco 49ers', league: 'NFL', price: 187.3, changePct: 1.21, volume24h: 24_800_000, capUsd: 4_450_000_000, spark: [176, 178, 180, 181, 182, 183, 184, 184.5, 185, 186, 186.5, 187.3] },
  { id: '13', symbol: 'BUFX', team: 'Buffalo Bills', league: 'NFL', price: 156.8, changePct: -0.35, volume24h: 19_400_000, capUsd: 3_100_000_000, spark: [159, 158.5, 158, 157.5, 157.2, 157, 156.9, 156.85, 156.82, 156.8, 156.78, 156.8] },
  { id: '14', symbol: 'BALX', team: 'Baltimore Ravens', league: 'NFL', price: 168.9, changePct: 0.52, volume24h: 17_200_000, capUsd: 3_380_000_000, spark: [162, 163, 164, 165, 166, 166.5, 167, 167.5, 168, 168.3, 168.6, 168.9] },
  { id: '15', symbol: 'DETX', team: 'Detroit Lions', league: 'NFL', price: 139.1, changePct: 2.88, volume24h: 26_100_000, capUsd: 2_720_000_000, spark: [124, 126, 128, 130, 132, 133, 134, 135, 136, 137, 138, 139.1] },
  { id: '16', symbol: 'TBY', team: 'Tampa Bay Buccaneers', league: 'NFL', price: 98.4, changePct: 0.19, volume24h: 12_300_000, capUsd: 1_910_000_000, spark: [96, 96.5, 97, 97.3, 97.6, 97.8, 98, 98.1, 98.2, 98.25, 98.3, 98.4] },
  { id: '17', symbol: 'GBX', team: 'Green Bay Packers', league: 'NFL', price: 121.7, changePct: -0.61, volume24h: 14_500_000, capUsd: 2_240_000_000, spark: [124, 123.5, 123, 122.5, 122.2, 122, 121.8, 121.7, 121.65, 121.7, 121.68, 121.7] },
  { id: '18', symbol: 'EDMX', team: 'Edmonton Oilers', league: 'NHL', price: 72.5, changePct: 1.44, volume24h: 5_600_000, capUsd: 980_000_000, spark: [66, 67, 68, 69, 69.5, 70, 70.5, 71, 71.5, 72, 72.3, 72.5] },
  { id: '19', symbol: 'TORX', team: 'Toronto Maple Leafs', league: 'NHL', price: 84.3, changePct: 0.07, volume24h: 6_900_000, capUsd: 1_120_000_000, spark: [83.5, 83.6, 83.7, 83.75, 83.8, 83.85, 83.9, 83.95, 84, 84.1, 84.2, 84.3] },
  { id: '20', symbol: 'VGKX', team: 'Vegas Golden Knights', league: 'NHL', price: 79.8, changePct: -1.04, volume24h: 4_800_000, capUsd: 910_000_000, spark: [83, 82.5, 82, 81.5, 81, 80.5, 80.2, 80, 79.9, 79.85, 79.82, 79.8] },
  { id: '21', symbol: 'INTX', team: 'Inter Miami CF', league: 'MLS', price: 56.2, changePct: 4.12, volume24h: 8_100_000, capUsd: 720_000_000, spark: [44, 46, 48, 49, 50, 51, 52, 53, 54, 54.5, 55.2, 56.2] },
  { id: '22', symbol: 'LAFC', team: 'Los Angeles FC', league: 'MLS', price: 48.9, changePct: 0.55, volume24h: 3_200_000, capUsd: 610_000_000, spark: [47, 47.2, 47.5, 47.8, 48, 48.1, 48.2, 48.35, 48.5, 48.6, 48.75, 48.9] },
  { id: '23', symbol: 'SEAX', team: 'Seattle Sounders FC', league: 'MLS', price: 41.3, changePct: -0.22, volume24h: 2_400_000, capUsd: 520_000_000, spark: [42, 41.8, 41.7, 41.6, 41.55, 41.5, 41.45, 41.4, 41.35, 41.32, 41.31, 41.3] },
  { id: '24', symbol: 'PICK', team: 'Major League Pickleball — Austin', league: 'MLP', price: 12.4, changePct: 6.02, volume24h: 1_100_000, capUsd: 88_000_000, spark: [8.2, 8.8, 9.4, 9.9, 10.2, 10.6, 11, 11.3, 11.6, 11.9, 12.1, 12.4] },
  { id: '25', symbol: 'WPLX', team: 'NWSL — Portland Thorns', league: 'NWSL', price: 22.8, changePct: 1.67, volume24h: 1_900_000, capUsd: 195_000_000, spark: [19, 19.5, 20, 20.4, 20.8, 21.1, 21.4, 21.7, 22, 22.3, 22.5, 22.8] },
  { id: '26', symbol: 'F1MX', team: 'McLaren F1 Team', league: 'F1', price: 64.0, changePct: 0.98, volume24h: 4_400_000, capUsd: 890_000_000, spark: [58, 59, 60, 60.5, 61, 61.5, 62, 62.5, 63, 63.5, 63.7, 64] },
  { id: '27', symbol: 'RFCR', team: 'Real Madrid CF', league: 'UEFA', price: 312.6, changePct: 0.41, volume24h: 42_000_000, capUsd: 6_100_000_000, spark: [305, 306, 307, 308, 309, 309.5, 310, 310.5, 311, 311.8, 312.2, 312.6] },
  { id: '28', symbol: 'LFCX', team: 'Liverpool FC', league: 'UEFA', price: 268.1, changePct: -0.19, volume24h: 35_500_000, capUsd: 5_050_000_000, spark: [272, 271, 270.5, 270, 269.5, 269, 268.6, 268.4, 268.3, 268.25, 268.15, 268.1] },
  { id: '29', symbol: 'PSGX', team: 'Paris Saint-Germain', league: 'UEFA', price: 241.4, changePct: 0.88, volume24h: 28_900_000, capUsd: 4_420_000_000, spark: [230, 232, 234, 235, 236, 237, 238, 239, 239.8, 240.2, 240.8, 241.4] },
  { id: '30', symbol: 'NRLS', team: 'Penrith Panthers', league: 'NRL', price: 18.6, changePct: 1.15, volume24h: 890_000, capUsd: 124_000_000, spark: [16.2, 16.5, 16.8, 17, 17.2, 17.4, 17.6, 17.8, 18, 18.2, 18.4, 18.6] },
]

/** @typedef {{ id: string; name: string; team: string; sport: string; position: string; intrinsic: number; impact: number; durability: number; narrative: string; tags: string[] }} Athlete */

/** @type {Athlete[]} */
export const athletes = [
  { id: 'a1', name: 'Victor Wembanyama', team: 'San Antonio Spurs', sport: 'Basketball', position: 'C', intrinsic: 98, impact: 96, durability: 82, narrative: 'Rim pressure + spacing elasticity drives outsized win probability in clutch minutes.', tags: ['Rookie scale', 'Global demand'] },
  { id: 'a2', name: 'Patrick Mahomes', team: 'Kansas City Chiefs', sport: 'Football', position: 'QB', intrinsic: 99, impact: 99, durability: 91, narrative: 'Off-script creation and postseason leverage curve are modeled as non-linear upside.', tags: ['Playoffs', 'Sponsorship beta'] },
  { id: 'a3', name: 'Connor McDavid', team: 'Edmonton Oilers', sport: 'Hockey', position: 'C', intrinsic: 97, impact: 98, durability: 88, narrative: 'Transition offense generation scores in the 99th percentile league-wide.', tags: ['PP unit', 'Canadian liquidity'] },
  { id: 'a4', name: 'Lionel Messi', team: 'Inter Miami CF', sport: 'Soccer', position: 'FW', intrinsic: 100, impact: 94, durability: 79, narrative: 'Merchandise and international broadcast rights show high correlation with token flow.', tags: ['Global icon', 'MLS uplift'] },
  { id: 'a5', name: 'Jayson Tatum', team: 'Boston Celtics', sport: 'Basketball', position: 'F', intrinsic: 94, impact: 95, durability: 90, narrative: 'Two-way wing archetype with stable usage — lower volatility in valuation bands.', tags: ['Two-way', 'Playoff minutes'] },
  { id: 'a6', name: 'Shohei Ohtani', team: 'Los Angeles Dodgers', sport: 'Baseball', position: 'DH / P', intrinsic: 100, impact: 97, durability: 72, narrative: 'Dual-role rarity creates scarcity premium in the Sportfolio composite index.', tags: ['Dual threat', 'Scarcity'] },
  { id: 'a7', name: 'Caitlin Clark', team: 'Indiana Fever', sport: 'Basketball', position: 'G', intrinsic: 95, impact: 97, durability: 89, narrative: 'Audience expansion metrics skew positive vs historical WNBA baselines.', tags: ['Audience growth', 'Media'] },
  { id: 'a8', name: 'Erling Haaland', team: 'Manchester City', sport: 'Soccer', position: 'ST', intrinsic: 96, impact: 95, durability: 86, narrative: 'Shot volume and xG overperformance sustained across three leagues.', tags: ['xG machine', 'UCL'] },
  { id: 'a9', name: 'Nikola Jokić', team: 'Denver Nuggets', sport: 'Basketball', position: 'C', intrinsic: 98, impact: 97, durability: 92, narrative: 'Offensive engine with elite assist gravity — model weights passing highly.', tags: ['MVP tier', 'Efficiency'] },
  { id: 'a10', name: 'Jude Bellingham', team: 'Real Madrid', sport: 'Soccer', position: 'MID', intrinsic: 93, impact: 94, durability: 87, narrative: 'Young core premium with multi-year runway in global fan markets.', tags: ['Youth runway', 'LaLiga'] },
  { id: 'a11', name: 'Aitana Bonmatí', team: 'FC Barcelona Femení', sport: 'Soccer', position: 'MID', intrinsic: 94, impact: 93, durability: 88, narrative: 'Ball progression and final-third entries rank in elite cohort.', tags: ['UWCL', 'Spain'] },
  { id: 'a12', name: 'Lamar Jackson', team: 'Baltimore Ravens', sport: 'Football', position: 'QB', intrinsic: 95, impact: 96, durability: 85, narrative: 'Designed run threat compresses defensive shells — unique EPA profile.', tags: ['EPA', 'Designed runs'] },
  { id: 'a13', name: 'Alex Ovechkin', team: 'Washington Capitals', sport: 'Hockey', position: 'LW', intrinsic: 91, impact: 92, durability: 86, narrative: 'Goal-scoring curve defies age priors; milestone demand spikes print volume.', tags: ['Goals record', 'Veteran alpha'] },
]

/** @typedef {{ id: string; t: string; symbol: string; side: 'BUY' | 'SELL'; qty: number; px: number; venue: string }} TapeRow */

/** @type {TapeRow[]} */
export const tape = [
  { id: 't1', t: '14:32:01', symbol: 'NYKX', side: 'BUY', qty: 420, px: 123.95, venue: 'SBE-NYC' },
  { id: 't2', t: '14:32:04', symbol: 'KCX', side: 'BUY', qty: 1200, px: 210.48, venue: 'SBE-CHI' },
  { id: 't3', t: '14:32:08', symbol: 'GSWX', side: 'SELL', qty: 310, px: 198.41, venue: 'SBE-SFO' },
  { id: 't4', t: '14:32:11', symbol: 'INTX', side: 'BUY', qty: 880, px: 56.18, venue: 'SBE-MIA' },
  { id: 't5', t: '14:32:15', symbol: 'RFCR', side: 'BUY', qty: 90, px: 312.55, venue: 'SBE-LON' },
  { id: 't6', t: '14:32:19', symbol: 'LALX', side: 'SELL', qty: 200, px: 142.28, venue: 'SBE-LAX' },
  { id: 't7', t: '14:32:22', symbol: 'DETX', side: 'BUY', qty: 1500, px: 139.05, venue: 'SBE-DET' },
  { id: 't8', t: '14:32:26', symbol: 'PHXX', side: 'BUY', qty: 640, px: 88.02, venue: 'SBE-PHX' },
  { id: 't9', t: '14:32:29', symbol: 'BOSY', side: 'BUY', qty: 220, px: 176.18, venue: 'SBE-BOS' },
  { id: 't10', t: '14:32:33', symbol: 'LFCX', side: 'SELL', qty: 400, px: 268.12, venue: 'SBE-LPL' },
  { id: 't11', t: '14:32:37', symbol: 'F1MX', side: 'BUY', qty: 3000, px: 63.98, venue: 'SBE-LON' },
  { id: 't12', t: '14:32:41', symbol: 'PICK', side: 'BUY', qty: 5000, px: 12.38, venue: 'SBE-AUS' },
  { id: 't13', t: '14:32:45', symbol: 'SFX', side: 'BUY', qty: 880, px: 187.28, venue: 'SBE-SFO' },
  { id: 't14', t: '14:32:49', symbol: 'DENX', side: 'BUY', qty: 190, px: 112.58, venue: 'SBE-DEN' },
  { id: 't15', t: '14:32:52', symbol: 'PSGX', side: 'SELL', qty: 120, px: 241.42, venue: 'SBE-PAR' },
  { id: 't16', t: '14:32:56', symbol: 'MIAX', side: 'BUY', qty: 720, px: 81.38, venue: 'SBE-MIA' },
  { id: 't17', t: '14:33:00', symbol: 'TORX', side: 'BUY', qty: 410, px: 84.28, venue: 'SBE-YYZ' },
  { id: 't18', t: '14:33:04', symbol: 'BUFX', side: 'SELL', qty: 600, px: 156.79, venue: 'SBE-BUF' },
  { id: 't19', t: '14:33:08', symbol: 'DALX', side: 'BUY', qty: 330, px: 103.88, venue: 'SBE-DFW' },
  { id: 't20', t: '14:33:12', symbol: 'WPLX', side: 'BUY', qty: 1200, px: 22.76, venue: 'SBE-PDX' },
]

export const ipoPipeline = [
  { id: 'i1', name: 'Oklahoma City Thunder', league: 'NBA', window: 'Q3 window', estUsd: 2_950_000_000, stage: 'Diligence' },
  { id: 'i2', name: 'Houston Texans', league: 'NFL', window: 'Q4 window', estUsd: 3_400_000_000, stage: 'Structuring' },
  { id: 'i3', name: 'Arsenal FC', league: 'UEFA', window: 'H1 next', estUsd: 4_200_000_000, stage: 'Early access' },
  { id: 'i4', name: 'Seattle Kraken', league: 'NHL', window: 'Q3 window', estUsd: 1_050_000_000, stage: 'Issuer review' },
  { id: 'i5', name: 'St. Louis CITY SC', league: 'MLS', window: 'Q4 window', estUsd: 480_000_000, stage: 'Token design' },
]

export const liquidityVenues = [
  { code: 'SBE-NYC', city: 'New York', depthUsd: 420_000_000, latencyMs: 38 },
  { code: 'SBE-LON', city: 'London', depthUsd: 310_000_000, latencyMs: 41 },
  { code: 'SBE-SFO', city: 'San Francisco', depthUsd: 290_000_000, latencyMs: 36 },
  { code: 'SBE-TYO', city: 'Tokyo', depthUsd: 180_000_000, latencyMs: 44 },
  { code: 'SBE-SYD', city: 'Sydney', depthUsd: 95_000_000, latencyMs: 47 },
]

export const insights = [
  'Composite bid depth +6.2% vs 20-session median after European cash open.',
  'Pickleball cohort velocity outpacing MLS fringe listings — watchlist flag ON.',
  'NHL Pacific timezone prints clustering around retail size buckets (100–250 sh).',
  'Qualified tape: block trade RFCR 12,400 sh crossed at mid + 2bps — dark pool tag.',
]

export function formatUsdCompact(n) {
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(2)}B`
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `$${(n / 1_000).toFixed(1)}K`
  return `$${n.toFixed(0)}`
}

export function formatUsdFull(n) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: n >= 100 ? 0 : 2 })
}
