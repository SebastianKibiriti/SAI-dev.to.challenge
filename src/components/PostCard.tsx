
import React from 'react';
import type { Post, Stat } from '../types';
import { StatType } from '../types';
import { DoubleArrowIcon, SearchIcon, CopyIcon, CopyrightIcon } from './icons';

const renderContent = (content: string) => {
  const parts = content.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <span key={index} className="text-text-highlight font-medium">
          {part.substring(2, part.length - 2)}
        </span>
      );
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
};

const StatItem: React.FC<{ stat: Stat }> = ({ stat }) => {
    const renderIcon = () => {
        switch (stat.type) {
            case StatType.Search: return <SearchIcon />;
            case StatType.Copy: return <CopyIcon />;
            case StatType.Copyright: return <CopyrightIcon />;
            default: return null;
        }
    };
    
    return (
        <div className="flex items-center gap-1.5">
            {renderIcon()}
            {(stat.type === StatType.Text || stat.type === StatType.Search) && <span>{stat.value}</span>}
        </div>
    );
};

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="relative group overflow-hidden rounded-2xl bg-card-bg shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-cyan-500/10">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
      <div className="relative p-4 flex flex-col gap-4 text-base leading-relaxed text-gray-300">
        <div className="flex items-center gap-3">
          <img src={post.user.avatar} alt={post.user.name} className="w-10 h-10 rounded-full border-2 border-gray-700" />
          <span className="font-bold text-white">{post.user.name}</span>
        </div>

        <p className="whitespace-pre-wrap font-serif italic">{renderContent(post.content)}</p>
        
        <div className="flex items-center justify-end">
          {post.extraIcon === 'double-arrow' && <DoubleArrowIcon />}
          
          {post.stats && (
              <div className="flex items-center gap-2">
                  {post.stats.map((statGroup, groupIndex) => (
                      <div key={groupIndex} className="bg-gray-800/60 text-gray-400 text-xs px-3 py-1.5 rounded-full flex items-center gap-3 font-mono">
                          {statGroup.map((stat, index) => <StatItem key={index} stat={stat} />)}
                      </div>
                  ))}
              </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
