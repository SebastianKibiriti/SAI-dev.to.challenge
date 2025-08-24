
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
    <div className="bg-card-bg rounded-2xl p-4 flex flex-col gap-3 text-sm leading-relaxed text-text-primary/90">
      <div className="flex items-center gap-3">
        <img src={post.user.avatar} alt={post.user.name} className="w-8 h-8 rounded-full" />
        <span className="font-semibold text-text-primary">{post.user.name}</span>
      </div>

      <p className="whitespace-pre-wrap">{renderContent(post.content)}</p>
      
      <div className="flex items-center justify-between">
        {post.extraIcon === 'double-arrow' && <DoubleArrowIcon />}
        
        {post.stats && (
            <div className="flex items-center gap-2 ml-auto">
                {post.stats.map((statGroup, groupIndex) => (
                    <div key={groupIndex} className="bg-nav-btn-bg text-text-secondary text-xs px-3 py-1.5 rounded-full flex items-center gap-3 font-mono">
                        {statGroup.map((stat, index) => <StatItem key={index} stat={stat} />)}
                    </div>
                ))}
            </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;
