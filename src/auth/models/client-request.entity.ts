import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ClientRequestStatus } from "./client-request.interface";
import { UserEntity } from "./user.entity";

@Entity('request')
export class FriendRequestEntity {
    @PrimaryGeneratedColumn()
    id: number;

    /* The@ManyToOne(() => UserEntity, (userEntity) => userEntity.sentFriendRequests)
    creator: UserEntity;
  
    @ManyToOne(
      () => UserEntity,
      (userEntity) => userEntity.receivedFriendRequests,
    )
    receiver: UserEntity;*/

    @Column()
    status: ClientRequestStatus;
}