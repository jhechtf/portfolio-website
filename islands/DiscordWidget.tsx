import { useEffect, useState } from "preact/hooks";

export interface Channel {
  id: string;
  name: string;
  position: number;
}

export interface Member {
  avatar?: string;
  avatar_url: string;
  discriminator: string;
  id: string;
  status: "online" | "offline";
  username: string;
}

export interface WidgetData {
  channels: Channel[];
  id: string;
  instant_invite: string;
  members: Member[];
  name: string;
  presence_count: number;
}

export default function DiscordWidget() {
  const [loading, setLoading] = useState(true);
  const [widgetData, setWidgetData] = useState<WidgetData | null>(null);

  useEffect(() => {
    const ac = new AbortController();
    fetch("https://discord.com/api/guilds/836322962012504145/widget.json", {
      signal: ac.signal,
    })
      .then(async (res) => {
        if (res.ok) {
          const data = await res.json();
          setWidgetData(data as WidgetData);
        } else {
          throw new Error(res.statusText);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
    return () => {
      ac.abort();
    };
  }, []);

  return (
    <div>
      {loading && "Loading..."}
      {!loading && widgetData?.name}
    </div>
  );
}
