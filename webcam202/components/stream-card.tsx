import { Card, CardContent } from './ui/card';
import { Eye } from 'lucide-react';

interface StreamCardProps {
  title: string;
  streamer: string;
  thumbnail: string;
  viewers: number;
  tags: string[];
}

export function StreamCard({ title, streamer, thumbnail, viewers, tags }: StreamCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video">
        <img
          src={thumbnail}
          alt={title}
          className="object-cover w-full h-full"
        />
        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
          LIVE
        </div>
        <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center">
          <Eye className="w-4 h-4 mr-1" />
          {viewers}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold truncate">{title}</h3>
        <p className="text-sm text-muted-foreground">{streamer}</p>
        <div className="flex flex-wrap gap-1 mt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-muted px-2 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
}
