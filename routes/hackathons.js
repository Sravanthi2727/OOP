// Replaces previous getCombined in routes/hackathons.js
async function getCombined(q, location) {
  q = q || "hackathon";
  console.log("[hackathons] getCombined q=", q, "location=", location);

  // cache
  if (Date.now() - cache.ts < CACHE_TTL && cache.data) {
    console.log("[hackathons] returning cached count=", cache.data.length);
    return cache.data;
  }

  // call sources
  const eb = await safeFetch(() => fetchEventbrite(q, location, 5)); // up to 5 pages
  const dp = await safeFetch(fetchDevpost);

  console.log(
    "[hackathons] results: eventbrite=",
    (eb || []).length,
    "devpost=",
    (dp || []).length
  );

  // Combine and normalize; do NOT add demo items
  const out = [];

  for (const e of eb || []) {
    const key = `eventbrite:${e.id}`;
    const item = {
      id: e.id,
      source: "eventbrite",
      title: e.title,
      description: e.description,
      start: e.start || null,
      end: e.end || null,
      url: e.url || null,
      is_free: e.is_free || false,
      capacity: e.capacity || null,
    };
    cache.byId[key] = item;
    out.push(item);
  }

  for (const d of dp || []) {
    const key = `devpost:${d.id}`;
    const item = {
      id: d.id,
      source: "devpost",
      title: d.title,
      description: d.description,
      start: d.start || null,
      end: d.end || null,
      url: d.url || null,
    };
    cache.byId[key] = item;
    out.push(item);
  }

  cache.ts = Date.now();
  cache.data = out;

  if (!out || out.length === 0) {
    console.warn(
      "[hackathons] WARNING: No events returned from all sources. See previous logs."
    );
  }

  return out;
}
