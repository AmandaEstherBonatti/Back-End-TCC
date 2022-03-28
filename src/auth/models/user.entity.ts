import { FeedPostEntity } from "src/feed/models/post.entity";
import { Entity, Column, OneToMany, ManyToMany, PrimaryColumn } from "typeorm";
import { Role } from "./role.enum";

@Entity('user')
export class UserEntity {

    @PrimaryColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ unique: true })
    email: string;

    @Column({ select: false })
    password: string;

    @Column({ nullable: true })
    imagePath: string;

    @Column({ type: 'enum', enum: Role, default: Role.USER })
    role: Role;

    @OneToMany(() => FeedPostEntity, (feedPostEntity) => feedPostEntity.author)
    feedPosts: FeedPostEntity[];

/*@OneToMany(
  () => FriendRequestEntity,
  (friendRequestEntity) => friendRequestEntity.creator,
)
sentFriendRequests: FriendRequestEntity[];

@OneToMany(
  () => FriendRequestEntity,
  (friendRequestEntity) => friendRequestEntity.receiver,
)
receivedFriendRequests: FriendRequestEntity[];

@ManyToMany(
  () => ConversationEntity,
  (conversationEntity) => conversationEntity.users,
)
conversations: ConversationEntity[];

@OneToMany(() => MessageEntity, (messageEntity) => messageEntity.user)
messages: MessageEntity[];/*
}


